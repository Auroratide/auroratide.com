import type { SlidingDemoElement } from '../../../SlidingDemo/sliding-demo'
import type { BalloonElement } from '../../../RubberJuggle/balloon'
import type { PegElement } from '../../../RubberJuggle/peg'

const html = `
    <sliding-demo autoplay>
        <horizontal-flex>
            <rubber-juggle-pegboard width="6" height="4" assetpath="/assets/components/rubber-juggle">
                <rubber-juggle-peg label="a" x="0" y="2"></rubber-juggle-peg>
                <rubber-juggle-peg label="b" x="3" y="2"></rubber-juggle-peg>
                <rubber-juggle-balloon x="1.5" y="0.8"></rubber-juggle-balloon>
                <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
            </rubber-juggle-pegboard>
            <section class="indicator">
                <p>
                    <span class="on-collision"><strong>Colliding!</strong></span>
                    <span class="no-collision">No Collision</span>
                </p>
                <div class="icon">
                    <vector-icon class="on-collision" icon="check"></vector-icon>
                    <vector-icon class="no-collision" icon="times"></vector-icon>
                </div>
            </section>
        </horizontal-flex>
    </sliding-demo>
`

const css = `
    :host {
        display: block;
    }

    strong {
        font-weight: bold;
    }

    .indicator {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.25em;
        background: #f7f7f7;
        padding: 1em 0.25em;
        color: #333;
    }

    .indicator p {
        margin-top: 0;
        text-align: center;
    }

    .indicator .icon {
        font-size: 2em;
    }

    .on-collision {
        display: none;
        color: var(--skin-danger-text);
    }

    .colliding .on-collision {
        display: inline-block;
    }

    .colliding .no-collision {
        display: none;
    }

    @media screen and (min-width: 75rem) {
        .indicator {
            font-size: 1.5em;
        }
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class BadDistanceDemoElement extends HTMLElement {
    static elementName = 'bad-distance-demo'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
        
        this.balloon.x = this.x
        this.slidingDemo.caption = this.caption
        this.slidingDemo.onslide = (t: number, host: SlidingDemoElement) => {
            const p = host.querySelector('rubber-juggle-balloon') as BalloonElement
            const a = host.querySelector('rubber-juggle-peg[label="a"]') as PegElement
            const b = host.querySelector('rubber-juggle-peg[label="b"]') as PegElement
            const indicator = host.querySelector('.indicator')

            const radius = 0.4
            p.y = 0.8 + t * (3 - 0.8)
            const dx = b.x - a.x
            const dy = b.y - a.y
            const area = Math.abs(dx * (a.y - p.y) - dy * (a.x - p.x))
            const length = Math.sqrt(dx * dx + dy * dy)
            const distance = area / length

            if (distance <= radius && !indicator?.classList.contains('colliding')) {
                indicator?.classList.add('colliding')
            }

            if (distance > radius && indicator?.classList.contains('colliding')) {
                indicator.classList.remove('colliding')
            }
        }
    }

    get caption() { return this.getAttribute('caption') ?? '' }
    set caption(value: string) { this.setAttribute('caption', value) }

    get x() { return parseFloat(this.getAttribute('x') ?? '0') }
    set x(value: number) { this.setAttribute('x', value.toString()) }

    get slidingDemo() { return this.shadowRoot?.querySelector('sliding-demo') as SlidingDemoElement }
    get balloon() { return this.shadowRoot?.querySelector('rubber-juggle-balloon') as BalloonElement }
}

export default () => {
    window.customElements.define(BadDistanceDemoElement.elementName, BadDistanceDemoElement)
}
