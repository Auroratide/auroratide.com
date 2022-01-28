import type { SlidingDemoElement } from '../../../SlidingDemo/sliding-demo'
import type { BalloonElement } from '../../../RubberJuggle/balloon'
import type { PegElement } from '../../../RubberJuggle/peg'

const html = `
    <sliding-demo autoplay>
        <horizontal-flex>
            <rubber-juggle-pegboard width="6" height="4" assetpath="/assets/components/rubber-juggle">
                <rubber-juggle-peg label="a" x="0" y="2"></rubber-juggle-peg>
                <rubber-juggle-peg label="b" x="3" y="2"></rubber-juggle-peg>
                <rubber-juggle-balloon class="balloon-1" x="1.5" y="0.8"></rubber-juggle-balloon>
                <rubber-juggle-balloon class="balloon-2" x="4.5" y="0.8"></rubber-juggle-balloon>
                <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
            </rubber-juggle-pegboard>
            <div class="indicators">
                <section class="balloon-1 indicator">
                    <p>
                        <span class="on-collision"><strong>Colliding!</strong></span>
                        <span class="no-collision">No Collision</span>
                    </p>
                    <div class="icon">
                        <vector-icon class="on-collision" icon="check"></vector-icon>
                        <vector-icon class="no-collision" icon="times"></vector-icon>
                    </div>
                </section>
                <section class="balloon-2 indicator">
                    <p>
                        <span class="on-collision"><strong>Colliding!</strong></span>
                        <span class="no-collision">No Collision</span>
                    </p>
                    <div class="icon">
                        <vector-icon class="on-collision" icon="check"></vector-icon>
                        <vector-icon class="no-collision" icon="times"></vector-icon>
                    </div>
                </section>
            </div>
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

    .indicators {
        display: flex;
        flex: 1;
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
        color: var(--skin-success-text);
    }

    .colliding .on-collision {
        display: inline-block;
    }

    .colliding .no-collision {
        display: none;
    }

    @media screen and (min-width: 75rem) {
        .indicators {
            flex-direction: column;
        }
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class GoodDistanceDemo extends HTMLElement {
    static elementName = 'good-distance-demo'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
        
        this.slidingDemo.caption = this.caption
        this.slidingDemo.onslide = (t: number, host: SlidingDemoElement) => {
            const p1 = host.querySelector('rubber-juggle-balloon.balloon-1') as BalloonElement
            const p2 = host.querySelector('rubber-juggle-balloon.balloon-2') as BalloonElement
            const a = host.querySelector('rubber-juggle-peg[label="a"]') as PegElement
            const b = host.querySelector('rubber-juggle-peg[label="b"]') as PegElement
            const indicator1 = host.querySelector('.indicator.balloon-1')
            const indicator2 = host.querySelector('.indicator.balloon-2')

            const radius = 0.4
            p1.y = 0.8 + t * (3 - 0.8)
            p2.y = p1.y

            if (this.distance(p1, a, b) <= radius) {
                if (!indicator1.classList.contains('colliding'))
                    indicator1.classList.add('colliding')
            } else {
                indicator1.classList.remove('colliding')
            }

            if (this.distance(p2, a, b) <= radius) {
                if (!indicator2.classList.contains('colliding'))
                    indicator2.classList.add('colliding')
            } else {
                indicator2.classList.remove('colliding')
            }
        }
    }

    get caption() { return this.getAttribute('caption') }
    set caption(value: string) { this.setAttribute('caption', value) }

    get slidingDemo() { return this.shadowRoot.querySelector('sliding-demo') as SlidingDemoElement }
    get balloon() { return this.shadowRoot.querySelector('rubber-juggle-balloon') as BalloonElement }

    distance(p: BalloonElement, a: PegElement, b: PegElement) {
        const dx = b.x - a.x
        const dy = b.y - a.y
        const th = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy)
        const ts = Math.min(Math.max(th, 0), 1)

        const sx = a.x + ts * dx - p.x
        const sy = a.y + ts * dy - p.y
        return Math.sqrt(sx * sx + sy * sy)
    }
}

export default () => {
    window.customElements.define(GoodDistanceDemo.elementName, GoodDistanceDemo)
}