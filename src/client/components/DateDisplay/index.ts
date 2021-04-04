import { makeCustomElement } from '../SvelteCustomElement'
import Component from './DateDisplay.svelte'

export const DateDisplay = makeCustomElement(Component, {
    name: 'date-display',
    props: ['date'],
})
