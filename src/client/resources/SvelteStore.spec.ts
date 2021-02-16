import type { ResourceItem, Maybe } from '.'
import { Pending } from '.'
import { InMemoryResourceApi, SvelteStore } from '.'
import { writable } from 'svelte/store'

type Item = {
    id: string,
    content?: string
}

describe('SvelteResource', () => {
    let unsubscribe = () => {}
    const item = (n: number, content?: string): Item => ({ id: n.toString(), content })

    afterEach(unsubscribe)

    describe('store already populated', () => {
        test('returns items in store', async () => {
            const internalStore = writable([item(0), item(1)])
            const api = new InMemoryResourceApi([])
            const store = new SvelteStore(internalStore, api)
    
            let list: Maybe<ResourceItem[]> = null
            let singleItem: Maybe<ResourceItem> = null
    
            unsubscribe = store.subscribe((resource) => {
                list = resource.list()
                singleItem = resource.one('1')
            })

            await api.finishAll()
    
            expect(list).toEqual([item(0), item(1)])
            expect(singleItem).toEqual(item(1))
        })

        test('fetching one item', async () => {
            const internalStore = writable([item(0)])
            const api = new InMemoryResourceApi([item(0, 'new content')])
            const store = new SvelteStore(internalStore, api)
    
            let singleItem: Maybe<ResourceItem> = null
    
            unsubscribe = store.subscribe((resource) => {
                singleItem = resource.one('0')
            })

            await api.finishAll()
            expect(singleItem).toEqual(item(0, 'new content'))
        })
    })

    describe('initially empty store', () => {
        let api: InMemoryResourceApi<ResourceItem>
        let store: SvelteStore<ResourceItem>

        beforeEach(() => {
            const internalStore = writable(null)
            api = new InMemoryResourceApi([item(0), item(1)])
            store = new SvelteStore(internalStore, api)
        })

        test('fetching the list', async () => {
            let list: Maybe<ResourceItem[]> = null
    
            unsubscribe = store.subscribe((resource) => {
                list = resource.list()
            })

            expect(list).toEqual(Pending)
    
            await api.finishAll()
            expect(list).toEqual([item(0), item(1)])
        })

        test('fetching one item', async () => {
            let singleItem = null
    
            unsubscribe = store.subscribe((resource) => {
                singleItem = resource.one('0')
            })

            expect(singleItem).toEqual(Pending)
    
            await api.finishAll()
            expect(singleItem).toEqual(item(0))
        })
    })
})
