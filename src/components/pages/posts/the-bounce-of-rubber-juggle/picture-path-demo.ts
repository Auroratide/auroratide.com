import type { SlidingDemoElement } from '@/components/SlidingDemo/sliding-demo'
import type { BalloonElement } from '@/components/RubberJuggle/balloon'
import type { PegElement } from '@/components/RubberJuggle/peg'

const html = `
    <sliding-demo autoplay>
        <horizontal-flex>
            <rubber-juggle-pegboard width="6" height="4" assetpath="/assets/components/rubber-juggle">
                <rubber-juggle-peg label="a" x="1" y="2"></rubber-juggle-peg>
                <rubber-juggle-peg label="b" x="4" y="1"></rubber-juggle-peg>
                <rubber-juggle-balloon x="1.3" y="0.7"></rubber-juggle-balloon>
                <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
            </rubber-juggle-pegboard>
            <section class="path">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.5 -0.5 6 4">
                    <line stroke="var(--picture-path-band-color)" stroke-width="0.05" x1="1" y1="2" x2="4" y2="1" />
                    <circle fill="var(--picture-path-peg-color)" cx="1" cy="2" r="0.15" />
                    <circle fill="var(--picture-path-peg-color)" cx="4" cy="1" r="0.15" />
                    <circle id="abstract-balloon" fill="var(--picture-path-balloon-color)" cx="1.3" cy="0.7" r="0.25" />
                    <polyline id="balloon-path" stroke="#000000" fill="none" stroke-width="0.05" stroke-dasharray="0.1" points="1.3,0.7 1.3,0.7" />
                </svg>
            </section>
        </horizontal-flex>
    </sliding-demo>
`

const css = `
    :host {
        --picture-path-peg-color: #c43030;
        --picture-path-balloon-color: #4164ff;
        --picture-path-band-color: #c2a37c;

        display: block;
    }

    * {
        box-sizing: border-box;
    }

    strong {
        font-weight: bold;
    }

    rubber-juggle-pegboard {
        flex: 1;
    }

    .path {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.125em;
        background: #f7f7f7;
        padding: 0;
    }

    @media screen and (min-width: 75rem) {
        .path {
            font-size: 1.25em;
        }
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class PicturePathDemo extends HTMLElement {
    static elementName = 'picture-path-demo'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
        
        this.slidingDemo.caption = this.caption
        this.slidingDemo.onslide = (t: number, host: SlidingDemoElement) => {
            const p = this.balloon
            if (t <= 0.5) {
                p.x = 1.3 + t * 2
                p.y = 0.7 + t * 1.2

                this.balloonPath.setAttribute('points', `1.3,0.7 ${p.x},${p.y}`)
            } else {
                p.x = 2.3 + (t - 0.5) * 0.882
                p.y = 1.3 + (t - 0.5) * -2.158

                this.balloonPath.setAttribute('points', `1.3,0.7 2.3,1.3 ${p.x},${p.y}`)
            }

            this.abstractBalloon.setAttribute('cx', p.x.toString())
            this.abstractBalloon.setAttribute('cy', p.y.toString())
        }
    }

    get caption() { return this.getAttribute('caption') }
    set caption(value: string) { this.setAttribute('caption', value) }

    get slidingDemo() { return this.shadowRoot.querySelector('sliding-demo') as SlidingDemoElement }
    get balloon() { return this.shadowRoot.querySelector('rubber-juggle-balloon') as BalloonElement }
    get abstractBalloon() { return this.shadowRoot.querySelector('#abstract-balloon') as SVGCircleElement }
    get balloonPath() { return this.shadowRoot.querySelector('#balloon-path') as SVGPolylineElement }
}

export default () => {
    window.customElements.define(PicturePathDemo.elementName, PicturePathDemo)
}