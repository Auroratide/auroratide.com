import { makeCustomElement } from '../SvelteCustomElement'
import Component from './ArticleImage.svelte'

export { Size } from './Size'
export const ArticleImage = makeCustomElement(Component, {
    name: 'article-image',
    props: ['src', 'alt', 'caption', 'size'],
})
