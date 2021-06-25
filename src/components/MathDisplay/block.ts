import { MathJaxElement } from './mathjax'

export class MathBlockElement extends MathJaxElement {
    static elementName = 'math-block'

    constructor() {
        super()
    }

    wrap(s: string) { return `$$ ${s} $$` }
}

export default () => {
    window.customElements.define(MathBlockElement.elementName, MathBlockElement)
}