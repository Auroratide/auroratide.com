import List from '../../../src/routes/portfolio/index.svelte'
import { component } from '../../testing/component'
import { PortfolioForge } from '../../lib/portfolio/PortfolioForge'
import { screen } from '@testing-library/svelte'
import type { PortfolioItem } from '../../../src/lib/portfolio/types'

describe('PostList', () => {
    let forge: PortfolioForge
    let items: Record<string, PortfolioItem>

    beforeEach(() => {
        forge = new PortfolioForge()
    })

    test('posts loaded', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }

        component(List)
            .prop('all', Object.values(items))
            .render()

        expect(screen.getByText(items.apple.title)).toBeInTheDocument()
        expect(screen.getByText(items.orange.title)).toBeInTheDocument()
    })

    test('unpublished post', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('unpublished', { title: 'Orange', publishedAt: null }),
        }

        component(List)
            .prop('all', Object.values(items))
            .render()

        expect(screen.queryByText(items.apple.title)).toBeInTheDocument()
        expect(screen.queryByText(items.orange.title)).not.toBeInTheDocument()
    })
})
