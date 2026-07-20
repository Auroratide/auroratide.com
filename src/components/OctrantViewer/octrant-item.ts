import {
    normalizeObject, normalizeForm, normalizeTime, deriveAbbr, type MemoryModel,
} from './data'

// A declarative, render-free data holder. Authors place these inside
// <octrant-viewer> to describe the memory models to plot:
//
//   <octrant-viewer>
//     <octrant-item name="mem0" object="personal" form="non-parametric" time="long"></octrant-item>
//     ...
//   </octrant-viewer>
//
// object:  personal | system
// form:    non-parametric | parametric
// time:    short | long   (short-term / long-term also accepted)
// abbr:    optional two-letter glyph for the dot (derived from name if omitted)
// summary: optional one-sentence description shown on hover
export default () => {
    const name = 'octrant-item'
    if (window.customElements.get(name)) return

    window.customElements.define(name, class extends HTMLElement {
        toModel(): MemoryModel {
            const label = (this.getAttribute('name') ?? '').trim() || 'Unnamed'
            const abbr = (this.getAttribute('abbr') ?? '').trim()
            return {
                name: label,
                object: normalizeObject(this.getAttribute('object')),
                form: normalizeForm(this.getAttribute('form')),
                time: normalizeTime(this.getAttribute('time')),
                abbr: abbr || deriveAbbr(label),
                summary: (this.getAttribute('summary') ?? '').trim() || undefined,
            }
        }
    })
}

export type OctrantItemElement = HTMLElement & { toModel(): MemoryModel }
