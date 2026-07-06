// Claude Opus
// Create a web component that is just moving tangram shapes around on a canvas, using either mouse or touch (ie. pointer).  if the user is moving around a shape with their finger (for instance on mobile), the screen shouldn't scroll.

export default () => {
    const name = 'tangram-board'

    const html = `
        <canvas id="board" part="board"></canvas>
        <p id="hint">Drag a piece to move it &middot; drag its handle to rotate</p>
    `

    const css = `
        :host {
            display: block;
        }

        #board {
            display: block;
            inline-size: 100%;
            block-size: auto;
            aspect-ratio: 3 / 2;
            margin-inline: auto;
            border-radius: 0.5em;
            background: var(--t-bg-b);
            box-shadow: inset 0 0 0 1px oklch(100% 0 0 / 0.06);

            /* Stop the page from scrolling / zooming while a finger drags a piece */
            touch-action: none;
            overscroll-behavior: contain;
            cursor: grab;

            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
        }

        #board.dragging {
            cursor: grabbing;
        }

        #board.rotating {
            cursor: alias;
        }

        #hint {
            text-align: center;
            opacity: 0.7;
            min-block-size: 1.5em;
        }
    `

    const template = document.createElement('template')
    template.innerHTML = `${html}<style>${css}</style>`

    type Piece = {
        verts: [number, number][]
        // How far the shape extends "upward" from its center in its own
        // local (unrotated) frame - used to keep the rotation handle snug
        // against the shape instead of orbiting at the full circumradius.
        upExtent: number
        // Safe clamp margin: guarantees both the piece body AND its handle
        // (which swings around at radius upExtent + gap) stay fully onscreen
        // no matter which way the piece is currently rotated.
        margin: number
        color: string
        pos: { x: number, y: number }
        angle: number
    }

    type DragMode = 'move' | 'rotate'

    window.customElements.define(name, class extends HTMLElement {
        private canvas!: HTMLCanvasElement
        private ctx!: CanvasRenderingContext2D
        private ro?: ResizeObserver

        private pieces: Piece[] = []
        private selected: Piece | null = null
        private active: Piece | null = null
        private dragMode: DragMode = 'move'
        private grabOffset = { x: 0, y: 0 }

        private dpr = 1
        private scale = 1
        private readonly worldW = 120
        private readonly worldH = 80
        private readonly handleGap = 4.5
        private readonly handleRadius = 3

        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        connectedCallback() {
            try {
                this.canvas = this.shadowRoot!.querySelector('#board')!
                this.ctx = this.canvas.getContext('2d')!

                this.buildPieces()
                this.resize()

                this.ro = new ResizeObserver(() => this.resize())
                this.ro.observe(this.canvas)

                this.canvas.addEventListener('pointerdown', this.onPointerDown)
                this.canvas.addEventListener('pointermove', this.onPointerMove)
                this.canvas.addEventListener('pointerup', this.onPointerUp)
                this.canvas.addEventListener('pointercancel', this.onPointerUp)
                this.canvas.addEventListener('contextmenu', e => e.preventDefault())
            } catch (e) {
                console.error(e)
            }
        }

        disconnectedCallback() {
            this.ro?.disconnect()
        }

        private buildPieces() {
            const s = 13                 // small-triangle leg
            const c = s * Math.SQRT2     // small hypotenuse / medium leg / parallelogram long side
            const h = s / Math.SQRT2     // parallelogram slant projection

            const defs: {
                raw: [number, number][],
                color: string,
                pos: { x: number, y: number },
                angle: number,
            }[] = [
                { raw: [[0, 0], [2 * s, 0], [0, 2 * s]],        color: 'oklch(64% 0.19 25)',  pos: { x: 26,  y: 28 }, angle: 0 },
                { raw: [[0, 0], [2 * s, 0], [0, 2 * s]],        color: 'oklch(62% 0.15 250)', pos: { x: 66,  y: 26 }, angle: Math.PI / 2 },
                { raw: [[0, 0], [c, 0], [0, c]],                color: 'oklch(74% 0.16 150)', pos: { x: 102, y: 30 }, angle: Math.PI },
                { raw: [[0, 0], [s, 0], [s, s], [0, s]],        color: 'oklch(82% 0.14 90)',  pos: { x: 24,  y: 58 }, angle: Math.PI / 4 },
                { raw: [[0, 0], [c, 0], [c + h, h], [h, h]],    color: 'oklch(64% 0.17 300)', pos: { x: 58,  y: 60 }, angle: 0 },
                { raw: [[0, 0], [s, 0], [0, s]],                color: 'oklch(72% 0.16 55)',  pos: { x: 90,  y: 58 }, angle: -Math.PI / 4 },
                { raw: [[0, 0], [s, 0], [0, s]],                color: 'oklch(74% 0.12 200)', pos: { x: 110, y: 56 }, angle: Math.PI / 2 },
            ]

            this.pieces = defs.map(d => {
                const { verts, maxR, upExtent } = centerVerts(d.raw)
                const margin = Math.max(maxR, upExtent + this.handleGap + this.handleRadius) + 1
                return {
                    verts,
                    upExtent,
                    margin,
                    color: d.color,
                    pos: this.clampPos(d.pos.x, d.pos.y, margin),
                    angle: d.angle,
                }
            })
        }

        private resize() {
            const rect = this.canvas.getBoundingClientRect()
            if (rect.width === 0) return

            this.dpr = window.devicePixelRatio || 1
            this.scale = rect.width / this.worldW
            this.canvas.width = Math.round(rect.width * this.dpr)
            this.canvas.height = Math.round(rect.height * this.dpr)

            this.draw()
        }

        private draw() {
            const { ctx } = this
            ctx.setTransform(this.dpr * this.scale, 0, 0, this.dpr * this.scale, 0, 0)
            ctx.clearRect(0, 0, this.worldW, this.worldH)
            for (const p of this.pieces) this.drawPiece(p)
            if (this.selected != null) this.drawHandle(this.selected)
        }

        private drawPiece(p: Piece) {
            const { ctx } = this
            const pts = this.transformed(p)

            const path = new Path2D()
            pts.forEach(([x, y], i) => i === 0 ? path.moveTo(x, y) : path.lineTo(x, y))
            path.closePath()

            const isSelected = p === this.selected

            ctx.save()
            if (isSelected) {
                ctx.shadowColor = 'oklch(100% 0 0 / 0.45)'
                ctx.shadowBlur = 2.5
            }
            ctx.fillStyle = p.color
            ctx.fill(path)
            ctx.restore()

            ctx.lineJoin = 'round'
            ctx.lineWidth = isSelected ? 0.9 : 0.5
            ctx.strokeStyle = isSelected ? 'oklch(100% 0 0 / 0.85)' : 'oklch(22% 0.03 255 / 0.7)'
            ctx.stroke(path)
        }

        private drawHandle(p: Piece) {
            const { ctx } = this
            const hp = this.handlePos(p)

            ctx.save()
            ctx.setLineDash([1.2, 1.2])
            ctx.lineWidth = 0.4
            ctx.strokeStyle = 'oklch(100% 0 0 / 0.5)'
            ctx.beginPath()
            ctx.moveTo(p.pos.x, p.pos.y)
            ctx.lineTo(hp.x, hp.y)
            ctx.stroke()
            ctx.restore()

            ctx.save()
            ctx.beginPath()
            ctx.arc(hp.x, hp.y, this.handleRadius, 0, Math.PI * 2)
            ctx.fillStyle = 'oklch(100% 0 0 / 0.95)'
            ctx.fill()
            ctx.lineWidth = 0.6
            ctx.strokeStyle = 'oklch(22% 0.03 255 / 0.8)'
            ctx.stroke()
            ctx.restore()
        }

        private transformed(p: Piece): [number, number][] {
            const cos = Math.cos(p.angle)
            const sin = Math.sin(p.angle)
            return p.verts.map(([vx, vy]): [number, number] => [
                p.pos.x + vx * cos - vy * sin,
                p.pos.y + vx * sin + vy * cos,
            ])
        }

        // The handle sits just outside the shape's own silhouette (not the
        // full circumradius), so it swings around close to the piece as it
        // turns instead of orbiting way out in space.
        private handlePos(p: Piece) {
            const dist = p.upExtent + this.handleGap
            const ang = p.angle - Math.PI / 2
            return {
                x: p.pos.x + dist * Math.cos(ang),
                y: p.pos.y + dist * Math.sin(ang),
            }
        }

        private toWorld(e: PointerEvent) {
            const rect = this.canvas.getBoundingClientRect()
            return {
                x: (e.clientX - rect.left) / rect.width * this.worldW,
                y: (e.clientY - rect.top) / rect.height * this.worldH,
            }
        }

        private clampPos(x: number, y: number, margin: number) {
            return {
                x: clamp(x, margin, this.worldW - margin),
                y: clamp(y, margin, this.worldH - margin),
            }
        }

        private pieceAt(x: number, y: number): Piece | null {
            // Iterate from the top of the stack downwards so the visually
            // top-most piece wins the hit test.
            for (let i = this.pieces.length - 1; i >= 0; --i) {
                if (pointInPoly(x, y, this.transformed(this.pieces[i]))) return this.pieces[i]
            }
            return null
        }

        private hitHandle(x: number, y: number): boolean {
            if (this.selected == null) return false
            const hp = this.handlePos(this.selected)
            // A slightly generous hit radius makes the handle easier to
            // grab with a fingertip than the drawn dot alone would allow.
            const r = this.handleRadius * 2
            return Math.hypot(x - hp.x, y - hp.y) <= r
        }

        onPointerDown = (e: PointerEvent) => {
            if (this.active) return // ignore extra fingers while one piece is held

            const w = this.toWorld(e)

            if (this.hitHandle(w.x, w.y)) {
                e.preventDefault()
                this.canvas.setPointerCapture(e.pointerId)
                this.canvas.classList.add('rotating')

                this.active = this.selected
                this.dragMode = 'rotate'
                this.draw()
                return
            }

            const hit = this.pieceAt(w.x, w.y)
            if (hit == null) {
                this.selected = null
                this.draw()
                return
            }

            e.preventDefault()
            this.canvas.setPointerCapture(e.pointerId)
            this.canvas.classList.add('dragging')

            this.active = hit
            this.selected = hit
            this.dragMode = 'move'
            this.grabOffset = { x: w.x - hit.pos.x, y: w.y - hit.pos.y }

            // Bring the grabbed piece to the front of the draw order.
            this.pieces = this.pieces.filter(p => p !== hit)
            this.pieces.push(hit)

            this.draw()
        }

        onPointerMove = (e: PointerEvent) => {
            if (this.active == null) return
            e.preventDefault()

            const w = this.toWorld(e)

            if (this.dragMode === 'rotate') {
                const dx = w.x - this.active.pos.x
                const dy = w.y - this.active.pos.y
                // Only update the angle once the pointer has actually left
                // the piece's center, otherwise atan2 direction is unstable.
                if (Math.hypot(dx, dy) > 0.5) {
                    this.active.angle = Math.atan2(dy, dx) + Math.PI / 2
                }
            } else {
                const nx = w.x - this.grabOffset.x
                const ny = w.y - this.grabOffset.y
                this.active.pos = this.clampPos(nx, ny, this.active.margin)
            }

            this.draw()
        }

        onPointerUp = (e: PointerEvent) => {
            if (this.active == null) return

            if (this.canvas.hasPointerCapture(e.pointerId)) {
                this.canvas.releasePointerCapture(e.pointerId)
            }
            this.canvas.classList.remove('dragging', 'rotating')

            this.active = null
            this.draw()
        }
    })
}

function centerVerts(raw: [number, number][]): { verts: [number, number][], maxR: number, upExtent: number } {
    const cx = raw.reduce((a, p) => a + p[0], 0) / raw.length
    const cy = raw.reduce((a, p) => a + p[1], 0) / raw.length
    const verts = raw.map(([x, y]): [number, number] => [x - cx, y - cy])
    const maxR = Math.max(...verts.map(([x, y]) => Math.hypot(x, y)))
    // Distance from center to the shape's edge in the local "up" (-y)
    // direction only - this is what actually matters for handle placement,
    // and is usually much smaller than the full circumradius (maxR).
    const upExtent = Math.max(...verts.map(([, y]) => -y))
    return { verts, maxR, upExtent }
}

function pointInPoly(x: number, y: number, verts: [number, number][]): boolean {
    let inside = false
    for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
        const [xi, yi] = verts[i]
        const [xj, yj] = verts[j]
        const crosses = (yi > y) !== (yj > y)
        if (crosses && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside
    }
    return inside
}

function clamp(v: number, lo: number, hi: number): number {
    return v < lo ? lo : v > hi ? hi : v
}