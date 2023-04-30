import type { SlidingDemoElement } from '../../../SlidingDemo/sliding-demo'
import type { BalloonElement } from '../../../RubberJuggle/balloon'
import type { PegElement } from '../../../RubberJuggle/peg'

const html = `
    <sliding-demo autoplay>
        <horizontal-flex>
            <rubber-juggle-pegboard width="6" height="4" assetpath="/assets/components/rubber-juggle">
                <rubber-juggle-peg label="a" x="1" y="2"></rubber-juggle-peg>
                <rubber-juggle-peg label="b" x="4" y="1"></rubber-juggle-peg>
                <rubber-juggle-balloon x="1.3" y="0.7"></rubber-juggle-balloon>
                <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
            </rubber-juggle-pegboard>
            <section class="numbers">
                <dl>
                    <dt>a</dt>
                    <dd id="px"></dd>
                    <dt>b</dt>
                    <dd id="py"></dd>
                    <dt>c</dt>
                    <dd id="vx"></dd>
                    <dt>d</dt>
                    <dd id="vy"></dd>
                    <dt>e</dt>
                    <dd id="ax"></dd>
                    <dt>f</dt>
                    <dd id="ay"></dd>
                    <dt>g</dt>
                    <dd id="bx"></dd>
                    <dt>h</dt>
                    <dd id="by"></dd>
                </dl>
            </section>
        </horizontal-flex>
    </sliding-demo>
`

const css = `
    :host {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    strong {
        font-weight: bold;
    }

    .numbers {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.125em;
        background: #f7f7f7;
        padding: 1em;
        font-family: var(--skin-font-code);
        color: #333;
    }

    .numbers dl {
        display: grid;
        grid-template-columns: 2fr 3fr 2fr 3fr;
        width: 100%;
        grid-gap: 0.25em;
    }

    .numbers dt, .numbers dd {
        margin: 0;
        padding: 0;
    }

    .numbers dt {
        font-weight: bold;
        text-align: right;
        padding-right: 0.25em;
    }

    .numbers dt::after {
        content: ':';
    }

    @media screen and (min-width: 75rem) {
        .numbers {
            font-size: 1.25em;
        }
    }
`

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

export class PictureNumbersDemo extends HTMLElement {
    static elementName = 'picture-numbers-demo'

    constructor() {
        super()

        this
            .attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
        
        this.slidingDemo.caption = this.caption
        this.slidingDemo.onslide = (t: number, host: SlidingDemoElement) => {
            const p = this.balloon
            const a = this.peg('a')
            const b = this.peg('b')
            if (t <= 0.5) {
                p.x = 1.3 + t * 2
                p.y = 0.7 + t * 1.2

                this.setVariable('vx', 0.857)
                this.setVariable('vy', 0.514)
            } else {
                p.x = 2.3 + (t - 0.5) * 0.882
                p.y = 1.3 + (t - 0.5) * -2.518

                this.setVariable('vx', 0.378)
                this.setVariable('vy', -0.925)
            }

            this.setVariable('px', p.x)
            this.setVariable('py', p.y)

            this.setVariable('ax', a.x)
            this.setVariable('ay', a.y)
            this.setVariable('bx', b.x)
            this.setVariable('by', b.y)
        }
    }

    get caption() { return this.getAttribute('caption') ?? '' }
    set caption(value: string) { this.setAttribute('caption', value) }

    get slidingDemo() { return this.shadowRoot?.querySelector('sliding-demo') as SlidingDemoElement }
    get balloon() { return this.shadowRoot?.querySelector('rubber-juggle-balloon') as BalloonElement }
    peg(label: string) { return this.shadowRoot?.querySelector(`rubber-juggle-peg[label="${label}"]`) as PegElement }
    setVariable(name: string, value: number) {
        const elem = this.shadowRoot?.querySelector(`#${name}`)
        if (elem != null) {
            elem.textContent = value.toLocaleString(undefined, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
            })
        }
    }
}

export default () => {
    window.customElements.define(PictureNumbersDemo.elementName, PictureNumbersDemo)
}
