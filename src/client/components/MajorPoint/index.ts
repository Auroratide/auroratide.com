import { makeCustomElement } from '../SvelteCustomElement'
import Component from './MajorPoint.svelte'

export const MajorPoint = makeCustomElement(Component, {
    name: 'major-point',
    props: [],
})
