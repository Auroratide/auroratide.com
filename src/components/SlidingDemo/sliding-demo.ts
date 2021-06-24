const html = `
    <figure>
        <slot></slot>
        <figcaption></figcaption>
        <input type="range" min="0" max="1" step="0.01" value="0" />
    </figure>
`

const css = `
    :host {
        display: block;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class SlidingDemo extends HTMLElement {
    static elementName = 'sliding-demo'

    imageImg: HTMLImageElement
    colorscapeImg: HTMLImageElement

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const input = this.shadowRoot.querySelector('input')
        const fn = this.onslide.split('.').reduce((o, n) => o[n], window)
        input.oninput = () => fn(input.value, this.shadowRoot.host)

        const figcaption = this.shadowRoot.querySelector('figcaption')
        figcaption.innerText = this.caption
    }

    get caption() { return this.getAttribute('caption') }
    set caption(value: string) { this.setAttribute('caption', value) }

    get onslide() { return this.getAttribute('onslide') }
    set onslide(value: string) { this.setAttribute('onslide', value) }
}

export default () => {
    window.customElements.define(SlidingDemo.elementName, SlidingDemo)
}