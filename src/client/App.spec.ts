import App from './App.svelte'
import { writable } from 'svelte/store'
import { SvelteStore, InMemoryResourceApi } from './resources'
import type { Post } from './posts/types'
import { PostForge } from './posts/testing/PostForge'
import { component } from '@/testing/component'
import { screen, act, fireEvent } from '@testing-library/svelte'

describe('App', () => {
    let posts: {
        forge?: PostForge
        items?: Record<string, Post>
        api?: InMemoryResourceApi<Post>,
        store?: SvelteStore<Post>,
    } = {}

    beforeEach(() => {
        posts.forge = new PostForge()
        posts.items = {}
        posts.items.apple = posts.forge.create('apple', {
            content: '<p>This is an apple</p>'
        })
        posts.items.orange = posts.forge.create('orange', {
            content: '<p>This is an orange</p>'
        })

        posts.api = new InMemoryResourceApi(Object.values(posts.items))
        posts.store = new SvelteStore(writable(null), posts.api)
    })

    test('end to end', async () => {
        component(App)
            .prop('posts', posts.store)
            .render()
        
        await act(() => posts.api.finishAll())

        expect(screen.getByText('apple')).toBeInTheDocument()
        expect(screen.getByText('orange')).toBeInTheDocument()

        /* Does not seem to work with page.js
        await fireEvent.click(screen.getByText('apple'))
        expect(screen.getByText('apple')).toBeInTheDocument()
        expect(screen.getByText('This is an apple')).toBeInTheDocument()
        /*  */
    })
})
