import { MathJaxElement } from './mathjax'

const html = `
    <div></div>
`

const css = `
    :host {
        display: block;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class MathBlockElement extends MathJaxElement {
    static elementName = 'math-block'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    container() { return this.shadowRoot.querySelector('div') }

    wrap(s: string) { return `$$ ${s} $$` }
}

export default () => {
    window.customElements.define(MathBlockElement.elementName, MathBlockElement)
}