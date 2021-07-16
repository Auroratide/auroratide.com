const html = `
    
`

const css = `
    
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class $NAME$ extends HTMLElement {
    static elementName = '$KEBAB_NAME$'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }

    static get observedAttributes() {
        return ['attribute']
    }

    attributeChangedCallback() {
        
    }

    get attribute() { return this.getAttribute('attribute') }
    set attribute(value: string) { this.setAttribute('attribute', value) }
}

export default () => {
    window.customElements.define($NAME$.elementName, $NAME$)
}