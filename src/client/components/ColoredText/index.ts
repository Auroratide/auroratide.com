import { makeCustomElement } from '../SvelteCustomElement'
import Component from './ColoredText.svelte'

export const ColoredText = makeCustomElement(Component, {
    name: 'colored-text',
    props: ['color'],
})
