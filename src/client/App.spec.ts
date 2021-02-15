import App from './App.svelte'
import { writable } from 'svelte/store'
import { SvelteStore, InMemoryResourceApi } from './resources'
import type { Post } from './posts/types'
import { component } from '@/testing/component'

describe('App', () => {
    let posts: SvelteStore<Post>

    beforeEach(() => {
        posts = new SvelteStore(writable(null), new InMemoryResourceApi([]))
    })

    test('rendering', () => {
        expect(() => component(App)
            .prop('posts', posts)
            .render()
        ).not.toThrow()
    })
})
