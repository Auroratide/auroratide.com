import App from './App.svelte'
import { writable } from 'svelte/store'
import { SvelteStore, InMemoryResourceApi } from './resources'
import type { Post } from './posts/types'
import { PostForge } from './posts/testing/PostForge'
import type { PortfolioItem } from './portfolio/types'
import { PortfolioForge } from './portfolio/testing/PortfolioForge'
import { component } from '@/testing/component'
import { screen, act, fireEvent } from '@testing-library/svelte'

describe('App', () => {
    let posts: {
        forge?: PostForge
        items?: Record<string, Post>
        api?: InMemoryResourceApi<Post>,
        store?: SvelteStore<Post>,
    } = {}

    let portfolio: {
        forge?: PortfolioForge
        items?: Record<string, PortfolioItem>
        api?: InMemoryResourceApi<PortfolioItem>,
        store?: SvelteStore<PortfolioItem>,
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

        portfolio.forge = new PortfolioForge()
        portfolio.items = {}
        portfolio.items.apple = portfolio.forge.create('banana', {
            content: '<p>This is an banana</p>'
        })

        portfolio.api = new InMemoryResourceApi(Object.values(portfolio.items))
        portfolio.store = new SvelteStore(writable(null), portfolio.api)
    })

    test('end to end', async () => {
        component(App)
            .prop('posts', posts.store)
            .prop('portfolio', portfolio.store)
            .render()
        
        await act(() => posts.api.finishAll())
        await act(() => portfolio.api.finishAll())

        expect(screen.queryByText('apple')).toBeInTheDocument()
        expect(screen.queryByText('orange')).toBeInTheDocument()
        expect(screen.queryByText('banana')).not.toBeInTheDocument()

        /* Does not seem to work with page.js
        await fireEvent.click(screen.getByText('apple'))
        expect(screen.getByText('apple')).toBeInTheDocument()
        expect(screen.getByText('This is an apple')).toBeInTheDocument()
        /*  */
    })
})
