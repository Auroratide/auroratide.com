import { PegboardElement } from "./pegboard"

export class PegboardEntity extends HTMLElement {
    get pegboard(): PegboardElement | null {
        return this.closest(PegboardElement.elementName) as PegboardElement
    }

    refreshAsset() {}
}
