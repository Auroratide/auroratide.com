import { makeCustomElement } from '../SvelteCustomElement'
import Component from './WhodokuWidget.svelte'

export const WhodokuWidget = makeCustomElement(Component, {
    name: 'whodoku-widget',
    props: ['assetspath'],
})
