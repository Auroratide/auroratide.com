import { DeferredHtmlElement } from '../DeferredHtmlElement'

export default () => {
    const name = 'point-compilation-view'

    const html = `
        <slot></slot>
    `

    const css = `
        :host {
            display: block;
        }
    `

    const template = document.createElement('template')
    template.innerHTML = `<style>${css}</style>${html}`

    window.customElements.define(name, class extends DeferredHtmlElement {
        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        deferUntil(): boolean {
            return document.getElementById(this.using) ? true : false
        }

        onFullyReady() {
            const pointCompilationNode = document.getElementById(this.using)
            if (pointCompilationNode) {
                const clone = pointCompilationNode.cloneNode(true) as HTMLElement
                clone.removeAttribute('id')
                clone.setAttribute('highlight', this.highlight)
                clone.setAttribute('show', 'true')
                
                while (this.firstChild)
                    this.removeChild(this.firstChild)
                this.appendChild(clone)
            }
        }

        get container(): HTMLElement {
            return this.shadowRoot.querySelector('.container')
        }

        get using(): string {
            return this.getAttribute('using')
        }

        set using(value: string) {
            this.setAttribute('using', value)
            this.onFullyReady()
        }

        get highlight(): string {
            return this.getAttribute('highlight')
        }

        set highlight(value: string) {
            this.setAttribute('highlight', value)
            this.onFullyReady()
        }
    })
}