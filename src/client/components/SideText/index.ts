import { makeCustomElement } from '../SvelteCustomElement'
import Component from './SideText.svelte'

export const SideText = makeCustomElement(Component, {
    name: 'side-text',
    props: ['warning', 'success', 'danger'],
})
