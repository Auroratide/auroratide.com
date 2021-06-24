export abstract class MathJaxElement extends HTMLElement {
    static get observedAttributes() {
        return ['tex']
    }

    attributeChangedCallback() {
        this.container().textContent = this.wrap(this.tex)
        this.typeset()
    }

    private typeset() {
        if (typeof MathJax === 'undefined') {
            (globalThis as any).MathJax = {}

            console.info('Retrieving MathJax...')
            const s = document.createElement('script')
            s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
            (document.head || document.body).appendChild(s)
        }

        if (MathJax.typeset) {
            MathJax.typeset([this.container()])
        } else {
            setTimeout(this.typeset.bind(this), 2)
        }
    }

    get tex() { return this.getAttribute('tex') }
    set tex(value: string) { this.setAttribute('tex', value) }

    abstract container(): HTMLElement
    abstract wrap(s: string): string
}