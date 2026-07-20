import * as THREE from 'three'
import {
    OCTANTS, octantFor, deriveAbbr, DEFAULT_MODELS,
    type MemoryModel, type Octant,
} from './data'
import type { OctrantItemElement } from './octrant-item'

// Axis mapping (all three dimensions are binary, so models land on cube corners):
//   X = object : personal (−X, left)  ↔ system (+X, right)
//   Y = time   : short   (−Y, bottom) ↔ long   (+Y, top)
//   Z = form   : non-param (+Z, front) ↔ param  (−Z, back)
const S = 1.1                 // half-size of the cube
const CORNER_INSET = 0.18     // pull each corner cluster slightly inside a face
const JITTER = 0.28           // swarm radius of dots around a corner
const DOT_SCALE = 0.18        // world size of a lettered dot
const HL_SCALE = 1.7          // multiplier when a dot is highlighted

const IDLE_SPEED = 0.06       // rad/s of the gentle turntable spin
const DRAG_SENS = 0.008       // rad per pixel dragged
const KEY_IMPULSE = 2.2       // rad/s kick from an arrow key
const SPIN_DAMP = 2.4         // how fast a fling eases back toward the target
const MAX_SPIN = 6.5          // clamp on fling velocity
const TAP_SLOP = 6            // px of movement still counted as a tap

const objectSign = (m: MemoryModel) => (m.object === 'system' ? 1 : -1)
const timeSign = (m: MemoryModel) => (m.time === 'long' ? 1 : -1)
const formSign = (m: MemoryModel) => (m.form === 'non-parametric' ? 1 : -1)

// Small deterministic RNG so a model always jitters to the same spot (stable
// layout across rebuilds, no flicker when children change).
const hash = (s: string) => {
    let h = 2166136261
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i)
        h = Math.imul(h, 16777619)
    }
    return h >>> 0
}
const mulberry32 = (seed: number) => () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const hex = (color: number) => `#${color.toString(16).padStart(6, '0')}`
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const timeLabel = (t: string) => (t === 'long' ? 'Long-term' : 'Short-term')

type Dot = THREE.Sprite & { userData: { model: MemoryModel; octant: Octant; base: number } }

export default () => {
    const name = 'octrant-viewer'
    if (window.customElements.get(name)) return

    const css = `
        :host {
            display: block;
            /* Guarantee a >=16px base; all inner text sizes are relative (em). */
            font-size: max(1rem, 16px);
            --octrant-height: clamp(26rem, 72vw, 46rem);
        }
        .stage {
            position: relative;
            width: 100%;
            height: var(--octrant-height);
            touch-action: pan-y;
            cursor: grab;
            border-radius: 0.5rem;
            outline: none;
        }
        .stage.grabbing { cursor: grabbing; }
        .stage:focus-visible {
            outline: 0.125em solid var(--t-primary-b, #7aa2f7);
            outline-offset: 0.25em;
        }
        canvas { display: block; width: 100%; height: 100%; }

        .tooltip {
            position: absolute;
            top: 0; left: 0;
            pointer-events: none;
            background: var(--t-bg-b, #2b303b);
            color: var(--t-fg-b, #f2f4f8);
            border: 0.0625em solid color-mix(in oklab, var(--t-fg-a, #aab) 30%, transparent);
            border-radius: 0.4em;
            padding: 0.5em 0.65em;
            font-size: 1em;
            line-height: 1.35;
            width: max-content;
            /* Never wider than the stage itself (matters on narrow phones). */
            max-width: min(22em, calc(100% - 1rem));
            box-shadow: 0 0.4em 1.2em rgba(0, 0, 0, 0.45);
            opacity: 0;
            transition: opacity 120ms ease;
            z-index: 2;
        }
        .tooltip.show { opacity: 1; }
        .tt-name { font-weight: 700; font-size: 1.05em; }
        .tt-oct { display: flex; align-items: center; gap: 0.4em; margin-top: 0.15em; }
        .tt-chip {
            display: inline-flex; align-items: center; justify-content: center;
            min-width: 1.6em; padding: 0 0.35em; height: 1.5em;
            border-radius: 0.3em; font-weight: 700;
            color: #14181f;
        }
        .tt-dims {
            margin-top: 0.2em;
            color: var(--t-fg-a, #aeb4c0);
        }
        .tt-summary { margin-top: 0.4em; line-height: 1.4; }

        .legend {
            list-style: none;
            margin: 0.75rem 0 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
            gap: 0.35em 1em;
            font-size: 1em;
        }
        .legend li { display: flex; align-items: baseline; gap: 0.45em; }
        .legend .sw {
            flex: none;
            width: 0.7em; height: 0.7em; border-radius: 50%;
            transform: translateY(0.05em);
        }
        .legend .num {
            flex: none; min-width: 2.2em;
            font-variant-numeric: tabular-nums; font-weight: 700;
            color: var(--t-fg-b, #f2f4f8);
        }
        .legend .role { color: var(--t-fg-a, #aeb4c0); }

        .hint {
            margin: 0.5em 0 0;
            font-size: 1em;
            color: var(--t-fg-a, #9aa0ac);
        }

        @media (prefers-reduced-motion: reduce) {
            .tooltip { transition: none; }
        }
    `

    const html = `
        <div class="stage" tabindex="0" role="img">
            <canvas></canvas>
            <div class="tooltip" part="tooltip"></div>
        </div>
        <ul class="legend"></ul>
        <p class="hint">Drag or swipe to spin · arrow keys to nudge · hover or tap a dot for details.</p>
    `

    const template = document.createElement('template')
    template.innerHTML = `<style>${css}</style>${html}`

    window.customElements.define(name, class extends HTMLElement {
        private stage!: HTMLDivElement
        private canvas!: HTMLCanvasElement
        private tooltip!: HTMLDivElement

        private renderer?: THREE.WebGLRenderer
        private scene!: THREE.Scene
        private camera!: THREE.PerspectiveCamera
        private root!: THREE.Group
        private dotsGroup!: THREE.Group
        private halo!: THREE.Sprite
        private raycaster = new THREE.Raycaster()
        private pointer = new THREE.Vector2(-2, -2)

        private dots: Dot[] = []
        private dotMaterials: THREE.SpriteMaterial[] = []
        private dotTextures: THREE.Texture[] = []
        private dotTexCache = new Map<string, THREE.CanvasTexture>()
        private highlighted: Dot | null = null
        private pinned = false
        private ttSize = { w: 0, h: 0 }  // tooltip box size, measured on content change

        private prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
        private spin = 0
        private interacted = false
        private dragging = false
        private moved = 0
        private lastX = 0
        private dragVel = 0
        private lastMoveT = 0
        private lastFrame = 0
        private rafId = 0
        private running = false
        private hoverDirty = false

        private resizeObserver?: ResizeObserver
        private intersectionObserver?: IntersectionObserver
        private mutationObserver?: MutationObserver

        constructor() {
            super()
            const shadow = this.attachShadow({ mode: 'open' })
            shadow.appendChild(template.content.cloneNode(true))
            this.stage = shadow.querySelector('.stage')!
            this.canvas = shadow.querySelector('canvas')!
            this.tooltip = shadow.querySelector('.tooltip')!
        }

        connectedCallback() {
            if (!this.renderer) this.initThree()
            this.buildLegend()
            this.rebuildDots()
            this.bindEvents()
            this.spin = this.prefersReducedMotion ? 0 : IDLE_SPEED
            this.start()
        }

        disconnectedCallback() {
            this.stop()
            this.resizeObserver?.disconnect()
            this.intersectionObserver?.disconnect()
            this.mutationObserver?.disconnect()
            document.removeEventListener('visibilitychange', this.onVisibility)
            this.clearDots()
            this.halo?.material.map?.dispose()
            this.halo?.material.dispose()
            this.renderer?.dispose()
            this.renderer = undefined
        }

        // --- three.js scene ------------------------------------------------

        private initThree() {
            const renderer = new THREE.WebGLRenderer({
                canvas: this.canvas, antialias: true, alpha: true,
            })
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer = renderer

            this.scene = new THREE.Scene()
            this.scene.fog = new THREE.Fog(0x21252d, 5.2, 8.8)

            this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
            this.camera.position.set(0, 1.9, 5.4)
            this.camera.lookAt(0, -0.05, 0)

            this.root = new THREE.Group()
            this.scene.add(this.root)

            this.buildFrame()

            this.dotsGroup = new THREE.Group()
            this.root.add(this.dotsGroup)

            this.halo = this.makeHalo()
            this.halo.visible = false
            this.root.add(this.halo)

            this.resizeObserver = new ResizeObserver(() => this.resize())
            this.resizeObserver.observe(this.stage)
            this.resize()
        }

        // Cube wireframe + faint central axes to convey the eight octants.
        private buildFrame() {
            const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(2 * S, 2 * S, 2 * S))
            const frame = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
                color: 0x8a93a6, transparent: true, opacity: 0.32,
            }))
            this.root.add(frame)

            const axisPts = [
                [-S, 0, 0, S, 0, 0],
                [0, -S, 0, 0, S, 0],
                [0, 0, -S, 0, 0, S],
            ].flat()
            const axisGeo = new THREE.BufferGeometry()
            axisGeo.setAttribute('position', new THREE.Float32BufferAttribute(axisPts, 3))
            this.root.add(new THREE.LineSegments(axisGeo, new THREE.LineBasicMaterial({
                color: 0x6b7385, transparent: true, opacity: 0.22,
            })))

            const L = S + 0.42
            this.root.add(this.makeLabel('Personal', 'object', new THREE.Vector3(-L, 0, 0)))
            this.root.add(this.makeLabel('System', 'object', new THREE.Vector3(L, 0, 0)))
            this.root.add(this.makeLabel('Long-term', 'time', new THREE.Vector3(0, L, 0)))
            this.root.add(this.makeLabel('Short-term', 'time', new THREE.Vector3(0, -L, 0)))
            this.root.add(this.makeLabel('Non-parametric', 'form', new THREE.Vector3(0, 0, L)))
            this.root.add(this.makeLabel('Parametric', 'form', new THREE.Vector3(0, 0, -L)))
        }

        private makeLabel(pole: string, axis: string, at: THREE.Vector3): THREE.Sprite {
            const dpr = Math.min(window.devicePixelRatio, 2)
            const w = 340, h = 150
            const canvas = document.createElement('canvas')
            canvas.width = w * dpr; canvas.height = h * dpr
            const ctx = canvas.getContext('2d')!
            ctx.scale(dpr, dpr)
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillStyle = '#eef1f6'
            ctx.font = '600 46px system-ui, sans-serif'
            ctx.fillText(pole, w / 2, h / 2 - 16)
            ctx.fillStyle = '#8b93a3'
            ctx.font = '600 24px system-ui, sans-serif'
            ctx.fillText(axis.toUpperCase(), w / 2, h / 2 + 30)

            const texture = new THREE.CanvasTexture(canvas)
            texture.colorSpace = THREE.SRGBColorSpace
            texture.anisotropy = 4
            const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
                map: texture, transparent: true, depthWrite: false,
            }))
            sprite.position.copy(at)
            const scale = 0.56
            sprite.scale.set(scale * (w / h), scale, 1)
            return sprite
        }

        private makeHalo(): THREE.Sprite {
            const size = 128
            const canvas = document.createElement('canvas')
            canvas.width = canvas.height = size
            const ctx = canvas.getContext('2d')!
            const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
            g.addColorStop(0, 'rgba(255,255,255,0.95)')
            g.addColorStop(0.35, 'rgba(255,255,255,0.35)')
            g.addColorStop(1, 'rgba(255,255,255,0)')
            ctx.fillStyle = g
            ctx.fillRect(0, 0, size, size)
            const texture = new THREE.CanvasTexture(canvas)
            const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
                map: texture, transparent: true, depthWrite: false,
                blending: THREE.AdditiveBlending,
            }))
            sprite.scale.setScalar(0.5)
            return sprite
        }

        // A colored disc bearing the model's two-letter abbreviation.
        private dotTexture(abbr: string, color: number): THREE.CanvasTexture {
            const key = `${abbr}|${color}`
            const cached = this.dotTexCache.get(key)
            if (cached) return cached

            const size = 160
            const canvas = document.createElement('canvas')
            canvas.width = canvas.height = size
            const ctx = canvas.getContext('2d')!
            const r = size / 2
            ctx.beginPath()
            ctx.arc(r, r, r * 0.84, 0, Math.PI * 2)
            ctx.fillStyle = hex(color)
            ctx.fill()
            ctx.lineWidth = size * 0.045
            ctx.strokeStyle = 'rgba(10,12,16,0.35)'
            ctx.stroke()

            ctx.fillStyle = '#141821'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.font = `800 ${size * 0.4}px system-ui, sans-serif`
            ctx.fillText(abbr, r, r * 1.05)

            const texture = new THREE.CanvasTexture(canvas)
            texture.colorSpace = THREE.SRGBColorSpace
            texture.anisotropy = 4
            this.dotTexCache.set(key, texture)
            this.dotTextures.push(texture)
            return texture
        }

        // --- data → dots ---------------------------------------------------

        private readModels(): MemoryModel[] {
            const items = Array.from(this.querySelectorAll('octrant-item')) as OctrantItemElement[]
            const models = items
                .filter((el) => typeof el.toModel === 'function')
                .map((el) => el.toModel())
            return models.length > 0 ? models : DEFAULT_MODELS
        }

        private clearDots() {
            this.dots.forEach((d) => this.dotsGroup?.remove(d))
            this.dots = []
            this.dotMaterials.forEach((m) => m.dispose())
            this.dotMaterials = []
            this.dotTextures.forEach((t) => t.dispose())
            this.dotTextures = []
            this.dotTexCache.clear()
            this.highlighted = null
            if (this.halo) this.halo.visible = false
        }

        private rebuildDots() {
            if (!this.dotsGroup) return
            this.clearDots()

            const models = this.readModels()
            const perOctantIndex = new Map<string, number>()

            models.forEach((model) => {
                const octant = octantFor(model)
                if (!octant) return

                const idx = perOctantIndex.get(octant.numeral) ?? 0
                perOctantIndex.set(octant.numeral, idx + 1)
                const rand = mulberry32(hash(`${model.name}#${idx}`))

                const cx = objectSign(model) * (S - CORNER_INSET)
                const cy = timeSign(model) * (S - CORNER_INSET)
                const cz = formSign(model) * (S - CORNER_INSET)

                const abbr = model.abbr || deriveAbbr(model.name)
                const material = new THREE.SpriteMaterial({
                    map: this.dotTexture(abbr, octant.color),
                    transparent: true, depthWrite: false, fog: true,
                })
                this.dotMaterials.push(material)

                const dot = new THREE.Sprite(material) as Dot
                dot.position.set(
                    cx + (rand() * 2 - 1) * JITTER,
                    cy + (rand() * 2 - 1) * JITTER,
                    cz + (rand() * 2 - 1) * JITTER,
                )
                dot.scale.set(DOT_SCALE, DOT_SCALE, 1)
                dot.userData = { model, octant, base: octant.color }
                this.dots.push(dot)
                this.dotsGroup.add(dot)
            })

            this.stage.setAttribute('aria-label',
                `Interactive 3D plot of ${models.length} LLM memory models arranged by object, form, and time into eight octants.`)
        }

        private buildLegend() {
            const legend = this.shadowRoot!.querySelector('.legend')!
            legend.innerHTML = ''
            Object.values(OCTANTS).forEach((oct) => {
                const li = document.createElement('li')
                const sw = document.createElement('span')
                sw.className = 'sw'
                sw.style.background = hex(oct.color)
                const num = document.createElement('span')
                num.className = 'num'
                num.textContent = oct.numeral
                const role = document.createElement('span')
                role.className = 'role'
                role.textContent = oct.role
                li.append(sw, num, role)
                legend.appendChild(li)
            })
        }

        // --- interaction ---------------------------------------------------

        private bindEvents() {
            this.stage.addEventListener('pointerdown', this.onPointerDown)
            this.stage.addEventListener('pointermove', this.onPointerMove)
            this.stage.addEventListener('pointerup', this.onPointerUp)
            this.stage.addEventListener('pointercancel', this.onPointerUp)
            this.stage.addEventListener('pointerleave', this.onPointerLeave)
            this.stage.addEventListener('keydown', this.onKeyDown)
            document.addEventListener('visibilitychange', this.onVisibility)

            this.intersectionObserver = new IntersectionObserver((entries) => {
                const visible = entries.some((e) => e.isIntersecting)
                if (visible && !document.hidden) this.start()
                else this.stop()
            }, { threshold: 0 })
            this.intersectionObserver.observe(this)

            this.mutationObserver = new MutationObserver(() => this.rebuildDots())
            this.mutationObserver.observe(this, { childList: true, subtree: true, attributes: true })
        }

        private onVisibility = () => {
            if (document.hidden) this.stop()
            else this.start()
        }

        private setPointer(e: PointerEvent) {
            const rect = this.canvas.getBoundingClientRect()
            this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        }

        private onPointerDown = (e: PointerEvent) => {
            this.interacted = true
            this.dragging = true
            this.moved = 0
            this.lastX = e.clientX
            this.lastMoveT = performance.now()
            this.dragVel = 0
            this.stage.classList.add('grabbing')
            this.stage.setPointerCapture?.(e.pointerId)
            this.stage.focus?.()
        }

        private onPointerMove = (e: PointerEvent) => {
            this.setPointer(e)
            if (this.dragging) {
                const now = performance.now()
                const dt = Math.max((now - this.lastMoveT) / 1000, 1 / 240)
                const dx = e.clientX - this.lastX
                this.lastX = e.clientX
                this.lastMoveT = now
                this.moved += Math.abs(dx)
                const dyaw = dx * DRAG_SENS
                this.root.rotation.y += dyaw
                this.dragVel = dyaw / dt
                this.hideTooltip()
            } else {
                this.hoverDirty = true
            }
        }

        private onPointerUp = (e: PointerEvent) => {
            if (!this.dragging) return
            this.dragging = false
            this.stage.classList.remove('grabbing')
            this.stage.releasePointerCapture?.(e.pointerId)
            if (this.moved < TAP_SLOP) {
                // A tap/click: pin whatever is under the pointer.
                this.setPointer(e)
                const hit = this.pick()
                if (hit) { this.highlight(hit, e); this.pinned = true }
                else { this.pinned = false; this.highlight(null) }
            } else {
                this.spin = THREE.MathUtils.clamp(this.dragVel, -MAX_SPIN, MAX_SPIN)
            }
        }

        private onPointerLeave = () => {
            if (!this.pinned) { this.hoverDirty = false; this.highlight(null) }
        }

        private onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') this.interacted = true
            if (e.key === 'ArrowRight') {
                this.spin = THREE.MathUtils.clamp(this.spin - KEY_IMPULSE, -MAX_SPIN, MAX_SPIN)
                e.preventDefault()
            } else if (e.key === 'ArrowLeft') {
                this.spin = THREE.MathUtils.clamp(this.spin + KEY_IMPULSE, -MAX_SPIN, MAX_SPIN)
                e.preventDefault()
            }
        }

        private pick(): Dot | null {
            this.raycaster.setFromCamera(this.pointer, this.camera)
            const hits = this.raycaster.intersectObjects(this.dots, false)
            return hits.length ? (hits[0].object as Dot) : null
        }

        private highlight(dot: Dot | null, e?: PointerEvent) {
            if (this.highlighted && this.highlighted !== dot) {
                this.highlighted.scale.set(DOT_SCALE, DOT_SCALE, 1)
            }
            this.highlighted = dot
            if (!dot) { this.halo.visible = false; this.hideTooltip(); return }

            const s = DOT_SCALE * HL_SCALE
            dot.scale.set(s, s, 1)
            this.halo.position.copy(dot.position)
            ;(this.halo.material as THREE.SpriteMaterial).color.setHex(dot.userData.base)
            this.halo.visible = true
            this.showTooltip(dot, e)
        }

        private showTooltip(dot: Dot, e?: PointerEvent) {
            const { model, octant } = dot.userData
            this.tooltip.innerHTML = `
                <div class="tt-name"></div>
                <div class="tt-oct"><span class="tt-chip"></span><span class="tt-role"></span></div>
                <div class="tt-dims"></div>
                <div class="tt-summary"></div>
            `
            this.tooltip.querySelector('.tt-name')!.textContent = model.name
            const chip = this.tooltip.querySelector('.tt-chip') as HTMLElement
            chip.textContent = octant.numeral
            chip.style.background = hex(octant.color)
            this.tooltip.querySelector('.tt-role')!.textContent = octant.role
            this.tooltip.querySelector('.tt-dims')!.textContent =
                `${capitalize(model.object)} · ${capitalize(model.form)} · ${timeLabel(model.time)}`
            const summary = this.tooltip.querySelector('.tt-summary') as HTMLElement
            if (model.summary) { summary.textContent = model.summary; summary.style.display = '' }
            else summary.style.display = 'none'

            // Measure once now that content is set; reused while it stays pinned.
            this.ttSize = { w: this.tooltip.offsetWidth, h: this.tooltip.offsetHeight }
            this.positionTooltip(e, dot)
            this.tooltip.classList.add('show')
        }

        private positionTooltip(e?: PointerEvent, dot?: Dot) {
            const rect = this.stage.getBoundingClientRect()
            let px: number, py: number
            if (e) {
                px = e.clientX - rect.left
                py = e.clientY - rect.top
            } else if (dot) {
                const v = dot.getWorldPosition(new THREE.Vector3()).project(this.camera)
                px = (v.x * 0.5 + 0.5) * rect.width
                py = (-v.y * 0.5 + 0.5) * rect.height
            } else return

            const pad = 8, gap = 12
            const w = this.ttSize.w || this.tooltip.offsetWidth
            const h = this.ttSize.h || this.tooltip.offsetHeight

            // Center on the point horizontally, then keep the whole box on-stage.
            const maxLeft = Math.max(pad, rect.width - w - pad)
            const left = THREE.MathUtils.clamp(px - w / 2, pad, maxLeft)

            // Prefer above the point; flip below if it would clip the top edge.
            let top = py - h - gap
            if (top < pad) top = py + gap
            const maxTop = Math.max(pad, rect.height - h - pad)
            top = THREE.MathUtils.clamp(top, pad, maxTop)

            this.tooltip.style.left = `${left}px`
            this.tooltip.style.top = `${top}px`
        }

        private hideTooltip() {
            this.tooltip.classList.remove('show')
        }

        // --- loop ----------------------------------------------------------

        private resize() {
            if (!this.renderer) return
            const w = this.stage.clientWidth || 1
            const h = this.stage.clientHeight || 1
            this.renderer.setSize(w, h, false)
            this.camera.aspect = w / h
            this.camera.updateProjectionMatrix()
        }

        private start() {
            if (this.running || !this.renderer) return
            this.running = true
            this.lastFrame = performance.now()
            this.rafId = requestAnimationFrame(this.frame)
        }

        private stop() {
            this.running = false
            if (this.rafId) cancelAnimationFrame(this.rafId)
            this.rafId = 0
        }

        private frame = (now: number) => {
            if (!this.running) return
            const dt = Math.min((now - this.lastFrame) / 1000, 0.05)
            this.lastFrame = now

            if (!this.dragging) {
                this.root.rotation.y += this.spin * dt
                // Gentle turntable idle until the user's first interaction; after
                // that the spin eases to a stop and stays put.
                const idle = (this.interacted || this.prefersReducedMotion) ? 0 : IDLE_SPEED
                this.spin += (idle - this.spin) * (1 - Math.exp(-SPIN_DAMP * dt))
            }

            if (this.hoverDirty && !this.dragging && !this.pinned) {
                this.hoverDirty = false
                this.highlight(this.pick())
            }
            // Keep a pinned/hovered tooltip glued to its dot as the cube turns.
            if (this.highlighted) this.positionTooltip(undefined, this.highlighted)

            this.renderer!.render(this.scene, this.camera)
            this.rafId = requestAnimationFrame(this.frame)
        }
    })
}
