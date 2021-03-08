import { makeCustomElement } from '../SvelteCustomElement'
import Component from './ResponsiveImage.svelte'

export const ResponsiveImage = makeCustomElement(Component, {
    name: 'responsive-image',
    props: ['src', 'alt', 'lowres', 'highres', 'ext'],
})
