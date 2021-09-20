export enum ExternalResourceType {
    JsModule = 'js-module',
    Css = 'css',
}

export class ExternalResource extends HTMLElement {
    static elementName = 'external-resource'

    static get observedAttributes() {
        return ['src', 'type']
    }

    private created: boolean = false

    constructor() {
        super()
    }

    connectedCallback() {
        this.style.display = 'none'

        this.createExternalResource()
    }

    attributeChangedCallback() {
        this.createExternalResource()
    }

    get type(): ExternalResourceType {
        return this.getAttribute('type') as ExternalResourceType
    }

    get src(): string {
        return this.getAttribute('src')
    }

    private createExternalResource() {
        console.log(this.type)
        if (!this.created && this.type && this.src) {
            if (this.type === ExternalResourceType.JsModule) {
                const elem = document.createElement('script')
                elem.type = 'module'
                elem.src = this.src;
    
                (document.head || document.body).appendChild(elem)
            } else if (this.type === ExternalResourceType.Css) {
                const elem = document.createElement('link')
                elem.rel = 'stylesheet'
                elem.href = this.src;
    
                (document.head || document.body).appendChild(elem)
            } else {
                throw new Error(`external-resource had invalid type ${this.getAttribute('type')}`)
            }

            this.created = true
        }
    }
}

export default () => {
    window.customElements.define(ExternalResource.elementName, ExternalResource)
}
