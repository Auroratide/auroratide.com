import { makeCustomElement } from '../SvelteCustomElement'
import Component from './ImageSteganographer.svelte'

export const ImageSteganographer = makeCustomElement(Component, {
    name: 'image-steganographer',
    props: [],
})
