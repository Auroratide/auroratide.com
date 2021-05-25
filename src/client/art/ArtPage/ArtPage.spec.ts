import { ArtPage } from '.'
import { InMemoryResource } from '@/client/resources'
import { ArtForge } from '../testing/ArtForge'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'
import type { ArtItem } from '../types'

describe('ArtPage', () => {
    let forge: ArtForge
    let items: Record<string, ArtItem>
    let resource: InMemoryResource<ArtItem>

    beforeEach(() => {
        forge = new ArtForge()
    })

    test('art not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(ArtPage)
            .prop('id', 'does-not-matter')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/finding/i)).toBeInTheDocument()
    })

    test('art now loaded', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(items))

        component(ArtPage)
            .prop('id', items.apple.id)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(items.apple.title)).toBeInTheDocument()
    })

    test('post not found', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(items))

        component(ArtPage)
            .prop('id', 'orange')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/not available/i)).toBeInTheDocument()
    })

    test('art loaded without content initially', () => {
        items = {
            apple: forge.create('apple', { content: null })
        }
        resource = new InMemoryResource(Object.values(items))

        component(ArtPage)
            .prop('id', 'apple')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/fetching\scontent/i)).toBeInTheDocument()
    })
})
