import type { SvelteComponent } from 'svelte';

export type CustomElementAttributes = {
    name: string,
    props: string[],
}

export type SvelteCustomElement = typeof SvelteComponent & {
    customElement: CustomElementAttributes
}

export const makeCustomElement = (component: typeof SvelteComponent, attributes: CustomElementAttributes): SvelteCustomElement => {
    const element: SvelteCustomElement = component as SvelteCustomElement
    element.customElement = attributes
    return element
}
