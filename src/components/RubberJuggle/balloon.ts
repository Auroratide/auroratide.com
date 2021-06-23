import { PegboardEntity } from './entity'

const html = `
    <img class="balloon" alt="Balloon" />
`

const css = `
    :host {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 30;
    }

    .balloon {
        display: block;
        width: 100%;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class BalloonElement extends PegboardEntity {
    static elementName = 'rubber-juggle-balloon'

    imageImg: HTMLImageElement
    colorscapeImg: HTMLImageElement

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));

        (this.shadowRoot.querySelector('.balloon') as HTMLImageElement).src = `${this.assetpath}/balloon.png`
    }

    connectedCallback() {
        this.host.style.width = `calc(100% / ${this.pegboard.width})`
    }

    static get observedAttributes() {
        return ['x', 'y']
    }

    attributeChangedCallback() {
        this.host.style.transform = `translate(calc(100% * ${this.x}), calc(100% * ${this.y}))`
    }

    get x() { return parseFloat(this.getAttribute('x') ?? '0') }
    set x(value: number) { this.setAttribute('x', value.toString()) }

    get y() { return parseFloat(this.getAttribute('y') ?? '0') }
    set y(value: number) { this.setAttribute('y', value.toString()) }

    get assetpath() { return this.pegboard.assetpath }
    get host() { return this.shadowRoot.host as HTMLElement }
}

export default () => {
    window.customElements.define(BalloonElement.elementName, BalloonElement)
}
