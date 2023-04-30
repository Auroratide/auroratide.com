interface VectorIcon extends HTMLElement {
    icon: string
}

const html = `
    <div role="separator">
        <vector-icon></vector-icon>
        <vector-icon class="middle"></vector-icon>
        <vector-icon></vector-icon>
    </div>
`

const css = `
    :host {
        display: block;
    }

    div[role="separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    vector-icon {
        margin: 0 0.5em;
    }

    .middle {
        font-size: 2em;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class IconDivider extends HTMLElement {
    static elementName = 'icon-divider'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }

    static get observedAttributes() {
        return ['icon']
    }

    attributeChangedCallback() {
        this.vectorIcons().forEach((elem: VectorIcon) => {
            elem.icon = this.icon
        })
    }

    get icon() { return this.getAttribute('icon') ?? '' }
    set icon(value: string) { this.setAttribute('icon', value) }

    vectorIcons(): NodeListOf<VectorIcon> {
        return this.shadowRoot!.querySelectorAll('vector-icon')!
    }
}

export default () => {
    window.customElements.define(IconDivider.elementName, IconDivider)
}
