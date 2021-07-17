export default () => {
    const name = 'img-colorscape'
    
    const IMGLOADED_EVENT = 'imgloaded'

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
            this.shadowRoot.host.addEventListener(IMGLOADED_EVENT, this.reveal)
        }

        hide = () => {
            this.imageImg.classList.add('hide')
            this.colorscapeImg.classList.remove('hide')
            this.shadowRoot.host.addEventListener(IMGLOADED_EVENT, this.reveal)
        }

        reveal = (e: Event) => {
            this.imageImg.classList.remove('hide')
            this.colorscapeImg.classList.add('hide')
            this.shadowRoot.host.removeEventListener(IMGLOADED_EVENT, this.reveal)
            e.stopPropagation()
        }

        static get observedAttributes() {
            return ['src', 'alt', 'colorscape']
        }

        attributeChangedCallback() {
            this.colorscapeImg.src = this.colorscape
            this.hide()
        }

        get colorscape() { return this.getAttribute('colorscape') }
        set colorscape(value: string) { this.setAttribute('colorscape', value) }
    })

    /**
     * <img-colorscape> assumes the slotted element emits a 'load' event
     * The load event is then used to dispatch the imgloaded event in order to
     * reveal the actual image over the colorscape
     */
    document.body.addEventListener('load', (e: Event) => {
        if (e.target instanceof HTMLElement) {
            let curParent = e.target.parentNode
            while (curParent !== null && curParent.nodeName.toUpperCase() !== 'IMG-COLORSCAPE') {
                curParent = curParent.parentNode
            }

            curParent?.dispatchEvent(new Event(IMGLOADED_EVENT))
        }
    }, true)
}