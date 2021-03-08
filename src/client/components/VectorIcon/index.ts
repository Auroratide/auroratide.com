import { makeCustomElement } from '../SvelteCustomElement'
import Component from './VectorIcon.svelte'

export { IconName } from './IconName'
export const VectorIcon = makeCustomElement(Component, {
    name: 'vector-icon',
    props: ['icon'],
})

