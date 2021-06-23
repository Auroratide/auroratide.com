import { PegboardEntity } from './entity'

const html = `
    <img class="peg" alt="Peg" />
`

const css = `
    :host {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
    }

    .peg {
        display: block;
        width: 100%;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class PegElement extends PegboardEntity {
    static elementName = 'rubber-juggle-peg'

    imageImg: HTMLImageElement
    colorscapeImg: HTMLImageElement

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));

        (this.shadowRoot.querySelector('.peg') as HTMLImageElement).src = `${this.assetpath}/peg.png`
    }

    connectedCallback() {
        const host = this.shadowRoot.host as HTMLElement

        host.style.width = `calc(100% / ${this.pegboard.width})`
        host.style.transform = `translate(calc(100% * ${this.x}), calc(100% * ${this.y}))`
    }

    get x() { return parseInt(this.getAttribute('x')) }
    set x(value: number) { this.setAttribute('x', value.toString()) }

    get y() { return parseInt(this.getAttribute('y')) }
    set y(value: number) { this.setAttribute('y', value.toString()) }

    get assetpath() { return this.pegboard.assetpath }
}

export default () => {
    window.customElements.define(PegElement.elementName, PegElement)
}