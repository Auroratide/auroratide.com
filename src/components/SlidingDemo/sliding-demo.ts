const html = `
    <figure>
        <slot></slot>
        <input class="slider" type="range" min="0" max="1" step="0.01" value="0" />
        <figcaption></figcaption>
    </figure>
`

const css = `
    :host {
        display: block;
    }

    figure {
        margin: 0;
    }

    figcaption {
        text-align: center;
        font-size: 87.5%;
        opacity: 0.75;
    }

    .slider {
        display: block;
        width: 100%;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class SlidingDemoElement extends HTMLElement {
    static elementName = 'sliding-demo'

    onslide: (t: number, host: SlidingDemoElement) => void

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const input = this.shadowRoot.querySelector('input')
        input.oninput = () => this.onslide(parseFloat(input.value), this)
    }

    static get observedAttributes(): string[] {
        return ['caption']
    }

    attributeChangedCallback() {
        const figcaption = this.shadowRoot.querySelector('figcaption')
        figcaption.innerText = this.caption
    }

    get caption() { return this.getAttribute('caption') }
    set caption(value: string) { this.setAttribute('caption', value) }
}

export default () => {
    window.customElements.define(SlidingDemoElement.elementName, SlidingDemoElement)
}