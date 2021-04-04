import { PortfolioPage } from '.'
import { InMemoryResource } from '@/client/resources'
import { PortfolioForge } from '../testing/PortfolioForge'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'
import type { PortfolioItem } from '../types'

describe('PostPage', () => {
    let forge: PortfolioForge
    let posts: Record<string, PortfolioItem>
    let resource: InMemoryResource<PortfolioItem>

    beforeEach(() => {
        forge = new PortfolioForge()
    })

    test('not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(PortfolioPage)
            .prop('id', 'does-not-matter')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/finding/i)).toBeInTheDocument()
    })

    test('now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioPage)
            .prop('id', posts.apple.id)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
    })

    test('not found', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioPage)
            .prop('id', 'orange')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/not available/i)).toBeInTheDocument()
    })

    test('loaded without content initially', () => {
        posts = {
            apple: forge.create('apple', { content: null })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioPage)
            .prop('id', 'apple')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/fetching\scontent/i)).toBeInTheDocument()
    })

    test('related items', async () => {
        posts = {
            apple: forge.create('apple', { category: 'fruit' }),
            orange: forge.create('orange', { category: 'fruit' }),
            banana: forge.create('banana', { category: 'fruit' }),
            carrot: forge.create('carrot', { category: 'vegetable' }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioPage)
            .prop('id', posts.apple.id)
            .prop('resource', resource)
            .render()

        expect(screen.queryByText(posts.orange.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.banana.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.carrot.title)).not.toBeInTheDocument()
    })
})
