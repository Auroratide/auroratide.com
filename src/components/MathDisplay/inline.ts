import { MathJaxElement } from './mathjax'

export class MathInlineElement extends MathJaxElement {
    static elementName = 'math-inline'

    constructor() {
        super()
    }

    wrap(s: string) { return `\\( ${s} \\)` }
}

export default () => {
    window.customElements.define(MathInlineElement.elementName, MathInlineElement)
}