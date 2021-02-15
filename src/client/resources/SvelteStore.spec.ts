import type { ResourceItem } from '.'
import { InMemoryResourceApi, SvelteStore } from '.'
import { writable } from 'svelte/store'

describe('SvelteResource', () => {
    let unsubscribe = () => {}
    const item = (n: number): ResourceItem => ({ id: n.toString() })

    afterEach(unsubscribe)

    test('returns items in store', () => {
        const internalStore = writable([item(0), item(1)])
        const store = new SvelteStore(internalStore, new InMemoryResourceApi([]))

        let list = []
        let singleItem = null

        unsubscribe = store.subscribe((resource) => {
            list = resource.list()
            singleItem = resource.one('1')
        })

        expect(list).toEqual([item(0), item(1)])
        expect(singleItem).toEqual(item(1))
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
            let list = []
    
            unsubscribe = store.subscribe((resource) => {
                list = resource.list()
            })
    
            await api.finishAll()
    
            expect(list).toEqual([item(0), item(1)])
        })

        test('fetching one item', async () => {
            let singleItem = null
    
            unsubscribe = store.subscribe((resource) => {
                singleItem = resource.one('0')
            })
    
            await api.finishAll()
    
            expect(singleItem).toEqual(item(0))
        })
    })
})
