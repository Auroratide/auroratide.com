import { ArtList } from '.'
import { InMemoryResource } from '@/client/resources'
import { component } from '@/testing/component'
import { ArtForge } from '../testing/ArtForge'
import { screen } from '@testing-library/svelte'
import type { ArtItem } from '../types'

describe('ArtList', () => {
    let forge: ArtForge
    let posts: Record<string, ArtItem>
    let resource: InMemoryResource<ArtItem>

    beforeEach(() => {
        forge = new ArtForge()
    })

    test('items not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(ArtList)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/fetching/i)).toBeInTheDocument()
    })

    test('items now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(ArtList)
            .prop('resource', resource)
            .render()

        expect(screen.queryByAltText(posts.apple.title)).toBeInTheDocument()
        expect(screen.queryByAltText(posts.orange.title)).toBeInTheDocument()
    })
})
