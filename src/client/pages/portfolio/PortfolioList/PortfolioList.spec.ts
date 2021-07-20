import { PortfolioList } from '.'
import { InMemoryResource } from '@/client/resources'
import { component } from '@/testing/component'
import { PortfolioForge } from '../testing/PortfolioForge'
import { screen } from '@testing-library/svelte'
import type { PortfolioItem } from '../types'

describe('PortfolioList', () => {
    let forge: PortfolioForge
    let posts: Record<string, PortfolioItem>
    let resource: InMemoryResource<PortfolioItem>

    beforeEach(() => {
        forge = new PortfolioForge()
    })

    test('not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(PortfolioList)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/fetching/i)).toBeInTheDocument()
    })

    test('now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioList)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.getByText(posts.orange.title)).toBeInTheDocument()
    })

    test('unpublished', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('unpublished', { title: 'Orange', publishedAt: null }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PortfolioList)
            .prop('resource', resource)
            .render()

        expect(screen.queryByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.orange.title)).not.toBeInTheDocument()
    })
})
