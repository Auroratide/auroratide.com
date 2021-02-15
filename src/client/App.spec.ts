import App from './App.svelte'
import { writable } from 'svelte/store'
import { SvelteResource, InMemoryResourceApi } from './resources'
import type { Post } from './posts/types'
import { component } from '@/testing/component'

describe('App', () => {
    let posts: SvelteResource<Post>

    beforeEach(() => {
        posts = new SvelteResource(writable(null), new InMemoryResourceApi([]))
    })

    test('rendering', () => {
        expect(() => component(App)
            .prop('posts', posts)
            .render()
        ).not.toThrow()
    })
})
