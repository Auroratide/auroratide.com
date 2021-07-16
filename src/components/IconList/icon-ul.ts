const html = `
    <ul>
        <slot></slot>
    </ul>
`

const css = `
    :host {
        display: block;
        padding-left: 2em;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class IconUl extends HTMLElement {
    static elementName = 'icon-ul'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }
}

export default () => {
    window.customElements.define(IconUl.elementName, IconUl)
}