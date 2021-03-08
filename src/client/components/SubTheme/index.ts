import { makeCustomElement } from '../SvelteCustomElement'
import Component from './SubTheme.svelte'

export const SubTheme = makeCustomElement(Component, {
    name: 'sub-theme',
    props: ['info', 'warning', 'success', 'danger'],
})
