export default () => {
    const name = 'img-colorscape'
    
    const html = `
        <img class="colorscape" alt="Colorscape" aria-hidden="true" />
        <div class="image hide">
            <slot></slot>
        </div>
    `

    const css = `
        :host {
            position: relative;
            display: inline-block;
            overflow: hidden;
        }

        img, ::slotted(*) {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
            opacity: 1;
            max-width: inherit;
            max-height: inherit;
            object-fit: contain;
        }

        .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            transition: opacity var(--colorscape-fade-duration, 400ms) linear;
        }

        .hide {
            opacity: 0;
        }

        .colorscape {
            transition: opacity calc(var(--colorscape-fade-duration, 400ms) * 1.5) ease-out;
        }
    `

    const template = document.createElement('template')
    template.innerHTML = `<style>${css}</style>${html}`

    window.customElements.define(name, class extends HTMLElement {
        imageImg: HTMLImageElement
        colorscapeImg: HTMLImageElement

        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

            this.imageImg = this.shadowRoot.querySelector('.image')
            this.colorscapeImg = this.shadowRoot.querySelector('.colorscape')
        }

        connectedCallback() {
            this.revealWhenImagesComplete()

            this.shadowRoot.querySelector('slot').addEventListener('slotchange', () => {
                this.revealWhenImagesComplete()
            })
        }

        hide = () => {
            this.imageImg.classList.add('hide')
            this.colorscapeImg.classList.remove('hide')
        }

        reveal = () => {
            this.imageImg.classList.remove('hide')
            this.colorscapeImg.classList.add('hide')
        }

        static get observedAttributes() {
            return ['colorscape']
        }

        attributeChangedCallback() {
            this.colorscapeImg.src = this.colorscape
        }

        get colorscape() { return this.getAttribute('colorscape') }
        set colorscape(value: string) { this.setAttribute('colorscape', value) }

        findImageChildren(parent: Element = this): HTMLImageElement[] {
            let result = parent.nodeName.toUpperCase() === 'IMG'
                ? [parent as HTMLImageElement]
                : []

            if (parent.children.length === 0)
                return result

            return result.concat(Array.from(parent.children)
                .flatMap(child => this.findImageChildren(child)))
        }

        waitForImageCompletion = async (img: HTMLImageElement) => {
            while(!img.complete)
                await new Promise(r => setTimeout(r, 100))
        }

        revealWhenImagesComplete = () => {
            const imgs = this.findImageChildren()
            if (imgs.length === 0)
                return Promise.resolve()

            return Promise.all(imgs.map(this.waitForImageCompletion)).then(() => {
                this.reveal()
            }).catch(() => {})
        }
    })
}