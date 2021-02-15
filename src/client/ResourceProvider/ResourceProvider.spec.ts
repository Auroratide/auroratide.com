import { writable } from 'svelte/store'
import { ResourceItem, InMemoryResourceApi, SvelteStore } from '@/client/resources'
import { ResourceProvider } from '.'
import SampleComponent from './SampleComponent.svelte'
import { component } from '@/testing/component'
import { screen, act } from '@testing-library/svelte'

describe('ResourceProvider', () => {
    let items: Record<string, ResourceItem>
    let api: InMemoryResourceApi<ResourceItem>
    let store: SvelteStore<ResourceItem>

    beforeEach(() => {
        items = {
            apple: { id: 'apple' },
            orange: { id: 'orange' },
        }

        api = new InMemoryResourceApi(Object.values(items))
        store = new SvelteStore(writable(null), api)
    })

    test('rendering', async () => {
        component(ResourceProvider)
            .prop('store', store)
            .prop('component', SampleComponent)
            .render()

        await act(() => api.finishAll())

        expect(screen.getByText(items.apple.id)).toBeInTheDocument()
        expect(screen.getByText(items.orange.id)).toBeInTheDocument()
    })
})
