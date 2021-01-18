import { makeCustomElement } from '../SvelteCustomElement'
import Component from './DecrementorWidget.svelte'

export const DecrementorWidget = makeCustomElement(Component, {
    name: 'decrementor-widget',
    props: ['initialvalue', 'increment'],
})
