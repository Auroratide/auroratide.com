export default () => {
    const name = 'side-text'
 
    const html = `
        <div><slot></slot></div>
    `
 
    const css = `
        :host {
            display: block;
        }
 
        div {
            margin: 0;
            padding: 0.25em 0.5em 0.25em 1.5em;
            border-left: 0.375rem solid;
            font-size: 90%;
            font-weight: normal;
            border-left-color: var(--skin-info-banner);
            background: var(--skin-info-overlay);
        }

        :host([warning]) div {
            border-left-color: var(--skin-warning-banner);
            background: var(--skin-warning-overlay);
        }

        :host([success]) div {
            border-left-color: var(--skin-success-banner);
            background: var(--skin-success-overlay);
        }

        :host([danger]) div {
            border-left-color: var(--skin-danger-banner);
            background: var(--skin-danger-overlay);
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
 