import { makeCustomElement } from '../SvelteCustomElement'
import Component from './MaslowsHierarchyOfNeeds.svelte'

export const MaslowsHierarchyOfNeeds = makeCustomElement(Component, {
    name: 'maslows-hierarchy-of-needs',
    props: [],
})
