import { makeCustomElement } from '../SvelteCustomElement'
import Component from './ConnectNineDots.svelte'

export const ConnectNineDots = makeCustomElement(Component, {
    name: 'connect-nine-dots',
    props: ['assetspath'],
})
