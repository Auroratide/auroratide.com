import { MathJaxElement } from './mathjax'

const html = `
    <span></span>
`

const css = `
    :host {
        display: inline-block;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class MathInlineElement extends MathJaxElement {
    static elementName = 'math-inline'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    container() { return this.shadowRoot.querySelector('span') }

    wrap(s: string) { return `\\( ${s} \\)` }
}

export default () => {
    window.customElements.define(MathInlineElement.elementName, MathInlineElement)
}