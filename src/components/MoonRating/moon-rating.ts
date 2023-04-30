export default () => {
    const name = 'moon-rating'

    const html = `
        <span id="moons" aria-hidden="true"></span>
    `

    const template = document.createElement('template')
    template.innerHTML = html

    window.customElements.define(name, class extends HTMLElement {
        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        static get observedAttributes() {
            return ['rating']
        }

        attributeChangedCallback() {
            this.setAttribute('title', `${this.rating} out of 5 moons`)
            this.shadowRoot!.querySelector('#moons')!.textContent = this.moonText()
        }

        get rating() { return Number(this.getAttribute('rating')) }
        set rating(value: number) { this.setAttribute('rating', value.toString()) }

        moonText = () => {
            let moonText = ''
            let r = this.rating
            for (let i = 0; i < 5; ++i) {
                moonText += this.moonEmoji(r--)
            }

            return moonText
        }

        moonEmoji = (n: number) => {
            if (n >= 1) return '🌕'
            else if (n >= 0.75) return '🌖'
            else if (n >= 0.5) return '🌗'
            else if (n >= 0.25) return '🌘'
            else return '🌑'
        }
    })
}
