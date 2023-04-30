export abstract class MathJaxElement extends HTMLElement {
    static STYLE_ID = 'MJX-CHTML-styles'
    private static elementsAwaitingTypeset: MathJaxElement[] = []

    static get observedAttributes() {
        return ['tex']
    }

    attributeChangedCallback() {
        this.textContent = this.wrap(this.tex)
        this.typeset()
    }

    private typeset() {
        if (typeof MathJax === 'undefined') {
            (globalThis as any).MathJax = {}

            console.info('Retrieving MathJax...')
            const s = document.createElement('script')
            s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
            s.onload = () => {
                while (MathJaxElement.elementsAwaitingTypeset.length > 0)
                    MathJaxElement.elementsAwaitingTypeset.pop()?.typeset()
                console.info('...MathJax loaded!')
            }

            (document.head || document.body).appendChild(s)
        }

        if (MathJax.typeset) {
            MathJax.typeset([this])
        } else {
            MathJaxElement.elementsAwaitingTypeset.push(this)
        }
    }

    get tex() { return this.getAttribute('tex') ?? '' }
    set tex(value: string) { this.setAttribute('tex', value) }

    abstract wrap(s: string): string
}
