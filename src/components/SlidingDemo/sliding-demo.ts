const html = `
    <figure>
        <slot></slot>
        <div class="controls">
            <button class="play-pause" aria-label="play">
                <vector-icon class="play" icon="play"></vector-icon>
                <vector-icon class="pause" icon="pause"></vector-icon>
            </button>
            <div class="slider">
                <label for="slider">Time</label>
                <input id="slider" type="range" min="0" max="1" step="0.005" value="0" />
            </div>
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
        color: var(--skin-banner-text);
        padding: 0.5em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        margin-right: 0.5em;
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
        filter: drop-shadow(0.125em 0.125em 0.125em rgba(0, 0, 0, 0.25));
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

    .playing .controls button.play-pause {
        background: var(--skin-danger-interactive);
    }

    .paused .controls button.play-pause {
        background: var(--skin-success-interactive);
    }

    .playing .controls button.play-pause vector-icon.play {
        display: none;
    }

    .paused .controls button.play-pause vector-icon.pause {
        display: none;
    }

    .controls button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .slider {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
    }

    .slider input {
        width: 100%;
    }

    .slider label {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 75%;
        transform: translate(0, calc(-50% - 1em));
        line-height: 1;
        font-style: italic;
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
        this.playPauseButton.onclick = this.toggle
    }

    connectedCallback() {
        this.input.oninput = () => this.onslide(this.t, this)
        if (this.autoplay) {
            this.play()
        }
    }

    pause = () => {
        if (this.playing) {
            this.playPauseButton.setAttribute('aria-label', 'play')
            this.figure.classList.remove('playing')
            this.figure.classList.add('paused')
            clearTimeout(this.timeoutId)
            this.playing = false
        }
    }

    play = () => {
        if (!this.playing) {
            this.playPauseButton.setAttribute('aria-label', 'pause')
            this.figure.classList.add('playing')
            this.figure.classList.remove('paused')
            clearTimeout(this.timeoutId)
            this.playing = true
            requestAnimationFrame(this.tick)
        }
    }

    toggle = () => {
        if (this.playing) {
            this.pause()
        } else {
            this.play()
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

    get playPauseButton() { return this.shadowRoot.querySelector('button.play-pause') as HTMLButtonElement }

    get figure() { return this.shadowRoot.querySelector('figure') }
}

export default () => {
    window.customElements.define(SlidingDemoElement.elementName, SlidingDemoElement)
}