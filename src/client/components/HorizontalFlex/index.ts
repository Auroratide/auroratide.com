import { makeCustomElement } from '../SvelteCustomElement'
import Component from './HorizontalFlex.svelte'

export const HorizontalFlex = makeCustomElement(Component, {
    name: 'horizontal-flex',
    props: [],
})
