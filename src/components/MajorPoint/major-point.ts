export default () => {
    const name = 'major-point'

    const html = `
        <div><slot></slot></div>
    `

    const css = `
        :host {
            display: block;
            font-size: 1.5em;
            text-align: center;
            padding: 1em 1.5em;
            font-weight: 300;
            margin: 0;
            line-height: 1.5;
        }

        div {
            display: block;
            font-weight: normal;
        }

        div ::slotted(p) {
            text-align: center;
        }
    `

    const template = document.createElement('template')
    template.innerHTML = `<style>${css}</style>${html}`

    window.customElements.define(name, class extends HTMLElement {
        constructor() {
            super()

            this
                .attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }
    })
}
