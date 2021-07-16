interface VectorIcon extends HTMLElement {
    icon: string
}

const html = `
    <li>
        <vector-icon></vector-icon>
        <div class="content"><slot></slot></div>
    </li>
`

const css = `
    li {
        display: flex;
        margin-left: -1.5em;
    }

    vector-icon {
        margin: 0.333em 0.5em 0 0;
    }

    .content {
        display: inline-block;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class IconLi extends HTMLElement {
    static elementName = 'icon-li'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['icon']
    }

    attributeChangedCallback() {
        this.vectorIcon().icon = this.icon
    }

    get icon() { return this.getAttribute('icon') }
    set icon(value: string) { this.setAttribute('icon', value) }

    vectorIcon(): VectorIcon {
        return this.shadowRoot.querySelector('vector-icon')
    }
}

export default () => {
    window.customElements.define(IconLi.elementName, IconLi)
}