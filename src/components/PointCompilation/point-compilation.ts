import { DeferredHtmlElement } from '../DeferredHtmlElement'

/**
 * Done using a raw, vanilla web component because Svelte does not seem to
 * reflect properties to attributes. Since this element uses some low-level
 * DOM manipulation requiring attributes be preserved, I cannot use Svelte.
 * 
 * The biggest downside to this approach is the lack of an automated test,
 * since my framework basically cannot render web components at all.
 */
export default () => {
    const name = 'point-compilation'

    const html = `
        <section class="point-compilation">
            <header>
                <h1 class="title"></h1>
            </header>
            <div class="item-container">
                <aside class="image">
                    <slot name="image"></slot>
                </aside>
                <div class="items">
                    <slot name="items"></slot>
                </div>
            </div>
        </section>
    `

    const css = `
        :host {
            display: block;
            margin-bottom: 1.5em;
            --point-compilation-color: var(--skin-color-primary)
        }

        .point-compilation {
            position: relative;
        }
    
        .point-compilation.show {
            display: block;
        }
    
        header {
            position: relative;
            box-sizing: border-box;
            margin-bottom: -0.75em;
            padding: 0 0.5em;
            line-height: 1;
            z-index: 2;
        }
    
        header h1 {
            font-size: 1.375em;
            font-weight: normal;
            margin: 0;
            padding: 0 0.25em;
            line-height: 1;
            background-color: var(--skin-color-content);
            display: inline-block;
        }
    
        .item-container {
            position: relative;
            box-sizing: border-box;
            border-top: 0.25em solid var(--point-compilation-color);
            border-bottom: 0.25em solid var(--point-compilation-color);
            padding: 1em 0;
            z-index: 1;
        }

        .item-container::after {
            content: "";
            display: block;
            clear: both;
        }

        .image {
            float: right;
            max-width: min(6em, 15%);
            margin-top: -0.75em;
        }

        .image ::slotted(img) {
            width: 100%;
            display: block;
            padding-left: 0.25em;
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

            this.shadowRoot.querySelector('.title').textContent = this.title
        }

        deferUntil(): boolean {
            return (this.shadowRoot?.host?.children?.length ?? 0) > 0
        }

        onFullyReady() {
            this.setPointVisibility()
            console.log(this.show)
            if (!this.show)
                (this.shadowRoot.host as HTMLElement).style.display = 'none'
            else
                (this.shadowRoot.host as HTMLElement).style.display = ''
        }

        get title(): string {
            return this.getAttribute('title')
        }

        set title(value: string) {
            this.setAttribute('title', value)
            this.shadowRoot.querySelector('.title').textContent = value
        }

        get highlight(): string {
            return this.getAttribute('highlight')
        }

        set highlight(value: string) {
            this.setAttribute('highlight', value)
            this.setPointVisibility()
        }

        get show(): string {
            return this.getAttribute('show')
        }

        set show(value: string) {
            this.setAttribute('show', value)
        }

        setPointVisibility = () => {
            const points = this.shadowRoot.host.querySelector('[slot="items"]')?.children
            if (points) {
                let highlightAsNum = parseInt(this.highlight)
                if (!isNaN(highlightAsNum)) {
                    for (let i = 0; i < points.length; ++i) {
                        const elem = points[i] as HTMLElement
                        points[i].classList.remove('highlight', 'hide', 'mute')
                        if (i === highlightAsNum)
                            elem.classList.add('highlight')
                        else if (i < highlightAsNum)
                            elem.classList.add('mute')
                        else
                            elem.classList.add('hide')
                    }
                }
            }
        }
    })
}