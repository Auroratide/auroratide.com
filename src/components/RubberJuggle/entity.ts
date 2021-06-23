import { PegboardElement } from "./pegboard"

export class PegboardEntity extends HTMLElement {
    get pegboard(): PegboardElement {
        if (this.shadowRoot.host.parentElement.nodeName.toLowerCase() === PegboardElement.elementName) {
            return this.shadowRoot.host.parentElement as PegboardElement
        } else {
            console.error(`<${this.shadowRoot.host.tagName.toLowerCase()}> should be a direct child of <${PegboardElement.name}>`)
            return null
        }
    }
}
