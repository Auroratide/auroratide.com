import { ArtPage } from '.'
import { InMemoryResource } from '@/client/resources'
import { ArtForge } from '../testing/ArtForge'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'
import type { ArtItem } from '../types'

describe('ArtPage', () => {
    let forge: ArtForge
    let posts: Record<string, ArtItem>
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
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(ArtPage)
            .prop('id', posts.apple.id)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
    })

    test('post not found', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(ArtPage)
            .prop('id', 'orange')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/not available/i)).toBeInTheDocument()
    })
})
