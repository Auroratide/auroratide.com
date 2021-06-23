import { PegboardEntity } from './entity'
import type { PegElement } from './peg'

const html = `
    <div class="band" aria-label="band"></div>
`

const css = `
    :host {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: calc(100% / 6);
        z-index: 10;
        height: 5%;
        transform-origin: center left;
    }

    .band {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 100%;
        border-top: 0.25em solid #c2a37c;
        border-bottom: 0.25em solid #c2a37c;
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class BandElement extends PegboardEntity {
    static elementName = 'rubber-juggle-band'

    imageImg: HTMLImageElement
    colorscapeImg: HTMLImageElement

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const host = this.shadowRoot.host as HTMLElement
        const p = this.pegboard
        const e = this.endpoints()

        const dx = e.to.x - e.from.x
        const dy = e.to.y - e.from.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        const angle = -180 / Math.PI * Math.acos((e.to.x - e.from.x) / distance)

        host.style.width = `${100 / p.width * distance}%`
        host.style.top = `${100 / p.height * e.from.y + 50 / p.height - 2.5}%`
        host.style.left = `${100 / p.width * e.from.x + 50 / p.width}%`
        host.style.transform = `rotate(${angle}deg)`
    }

    endpoints(): {
        from: PegElement,
        to: PegElement,
    } {
        const f = this.pegboard.querySelector(`rubber-juggle-peg[label="${this.from}"]`) as PegElement
        const t = this.pegboard.querySelector(`rubber-juggle-peg[label="${this.to}"]`) as PegElement

        if (!f || !t) {
            if (!f) console.error(`Peg with label ${this.from} could not be found to make a band!`)
            if (!t) console.error(`Peg with label ${this.to} could not be found to make a band!`)
            return null
        }

        return {
            from: f,
            to: t,
        }
    }

    get from() { return this.getAttribute('from') }
    set from(value: string) { this.setAttribute('from', value) }

    get to() { return this.getAttribute('to') }
    set to(value: string) { this.setAttribute('to', value) }

    get assetpath() { return this.pegboard.assetpath }
}

export default () => {
    window.customElements.define(BandElement.elementName, BandElement)
}