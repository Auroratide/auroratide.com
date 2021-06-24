const html = `
    <figure>
        <slot></slot>
        <div class="controls">
            <input class="slider" type="range" min="0" max="1" step="0.005" value="0" />
            <button class="play" aria-label="play"><vector-icon icon="play"></vector-icon></button>
            <button class="pause" aria-label="pause"><vector-icon icon="pause" disabled></vector-icon></button>
        </div>
        <figcaption></figcaption>
    </figure>
`

const css = `
    :host {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    figure {
        margin: 0;
    }

    figcaption {
        text-align: center;
        font-size: 87.5%;
        opacity: 0.75;
    }

    .controls {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .controls button {
        font-size: 1em;
        border-radius: 2em;
        color: var(--skin-color-text-secondary);
        padding: 0.5em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        margin-left: 0.5em;
        box-shadow: 0.125em 0.125em 0.125em 0 rgba(0, 0, 0, 0.25);
        position: relative;
    }

    .controls button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
    }

    .controls button vector-icon {
        filter: drop-shadow(0.125em 0.125em 0.125em rgba(0, 0, 0, 0.25))
    }

    .controls button:hover:not([disabled]) {
        filter: brightness(0.9);
    }

    .controls button:active {
        box-shadow: none;
        left: 0.125em;
        top: 0.125em;
    }

    .controls button:active vector-icon {
        filter: none;
    }

    .controls button:active::before {
        top: -0.125em;
        left: -0.125em;
    }

    .controls button.play {
        background: var(--skin-color-primary);
    }

    .controls button.pause {
        background: var(--skin-color-secondary);
    }

    .controls button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .slider {
        flex: 1;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class SlidingDemoElement extends HTMLElement {
    static elementName = 'sliding-demo'

    onslide: (t: number, host: SlidingDemoElement) => void

    private input: HTMLInputElement
    private playing: boolean
    private timeoutId: NodeJS.Timeout

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));

        this.playing = false
        
        this.input = this.shadowRoot.querySelector('input')
        
        this.input.onmousedown = this.pause
        this.input.ontouchstart = this.pause
        this.playButton.onclick = this.play
        this.pauseButton.onclick = this.pause
    }

    connectedCallback() {
        this.input.oninput = () => this.onslide(this.t, this)
        if (this.autoplay) {
            this.play()
        }
    }

    pause = () => {
        this.pauseButton.disabled = true
        this.playButton.disabled = false
        clearTimeout(this.timeoutId)
        this.playing = false
    }

    play = () => {
        if (!this.playing) {
            this.pauseButton.disabled = false
            this.playButton.disabled = true
            clearTimeout(this.timeoutId)
            this.playing = true
            requestAnimationFrame(this.tick)
        }
    }

    restart = () => {
        this.t = this.min
        if (this.playing)
            requestAnimationFrame(this.tick)
    }

    private tick = () => {
        this.t += this.step
        this.onslide(this.t, this)

        if (this.playing) {
            if (this.t < this.max)
                requestAnimationFrame(this.tick)
            else
                this.timeoutId = setTimeout(this.restart, 2500)
        }
    }

    static get observedAttributes(): string[] {
        return ['caption']
    }

    attributeChangedCallback() {
        const figcaption = this.shadowRoot.querySelector('figcaption')
        figcaption.innerText = this.caption
    }

    get t() { return parseFloat(this.input.value) }
    set t(value: number) { this.input.value = value.toString() }
    get step() { return parseFloat(this.input.step) }
    get min() { return parseFloat(this.input.min) }
    get max() { return parseFloat(this.input.max) }

    get caption() { return this.getAttribute('caption') }
    set caption(value: string) { this.setAttribute('caption', value) }

    get autoplay() {
        return this.hasAttribute('autoplay')
    }
    set autoplay(value: boolean) {
        if (value) {
            this.setAttribute('autoplay', '')
        } else {
            this.removeAttribute('autoplay')
        }
    }

    get playButton() { return this.shadowRoot.querySelector('button.play') as HTMLButtonElement }
    get pauseButton() { return this.shadowRoot.querySelector('button.pause') as HTMLButtonElement }
}

export default () => {
    window.customElements.define(SlidingDemoElement.elementName, SlidingDemoElement)
}