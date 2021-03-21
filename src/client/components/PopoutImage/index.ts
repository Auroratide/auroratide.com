import { makeCustomElement } from '../SvelteCustomElement'
import Component from './PopoutImage.svelte'

export const PopoutImage = makeCustomElement(Component, {
    name: 'popout-image',
    props: ['src', 'alt'],
})
