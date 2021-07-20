const PEGBOARD_URL_NAME = '--rubber-juggle-pegboard'

const html = `
    <div class="container">
        <div class="pegboard"></div>
        <slot></slot>
    </div>
`

const css = `
    :host {
        display: inline-block;
        position: relative;
    }

    .pegboard {
        display: grid;
    }

    .hole {
        width: 100%;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class PegboardElement extends HTMLElement {
    static elementName = 'rubber-juggle-pegboard'

    imageImg: HTMLImageElement
    colorscapeImg: HTMLImageElement

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));

        (this.shadowRoot.host as HTMLElement).style.setProperty(PEGBOARD_URL_NAME, `url("${this.assetpath}/hole.png")`)
    }

    connectedCallback() {
        const pegboard = this.shadowRoot.querySelector('.pegboard') as HTMLElement

        for (let i = 0; i < this.width * this.height; ++i) {
            const img = document.createElement('img')
            img.src = `${this.assetpath}/hole.png`
            img.alt = ''
            img.setAttribute('aria-hidden', 'true')
            img.classList.add('hole')
            pegboard.appendChild(img)
        }

        pegboard.style.gridTemplateRows = `repeat(${this.height}, 1fr)`
        pegboard.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`
    }

    get assetpath() { return this.getAttribute('assetpath') }
    set assetpath(value: string) { this.setAttribute('assetpath', value) }

    get width() { return parseInt(this.getAttribute('width')) }
    set width(value: number) { this.setAttribute('width', value.toString()) }

    get height() { return parseInt(this.getAttribute('height')) }
    set height(value: number) { this.setAttribute('height', value.toString()) }
}

export default () => {
    window.customElements.define(PegboardElement.elementName, PegboardElement)
}