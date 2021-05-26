export default () => {
    const name = 'img-colorscape'

    const html = `
        <img class="colorscape" aria-hidden="true" />
        <img class="image hide" loading="lazy" />
    `

    const css = `
        :host {
            position: relative;
            display: inline-block;
            overflow: hidden;
        }

        img {
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
            transition: opacity var(--colorscape-fade-duration, 400ms) linear;
        }

        img.hide {
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
            this.imageImg.onload = () => {
                this.imageImg.classList.remove('hide')
                this.colorscapeImg.classList.add('hide')
            }
        }

        static get observedAttributes() {
            return ['src', 'alt', 'colorscape']
        }

        attributeChangedCallback() {
            this.imageImg.src = this.src
            this.imageImg.alt = this.alt

            this.colorscapeImg.src = this.colorscape
            this.colorscapeImg.alt = this.alt
        }

        get src() { return this.getAttribute('src') }
        set src(value: string) { this.setAttribute('src', value) }

        get alt() { return this.getAttribute('alt') }
        set alt(value: string) { this.setAttribute('alt', value) }

        get colorscape() { return this.getAttribute('colorscape') }
        set colorscape(value: string) { this.setAttribute('colorscape', value) }
    })
}