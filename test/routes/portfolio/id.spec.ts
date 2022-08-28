import Page from '../../../src/routes/portfolio/[id]/+page.svelte'
import { PortfolioForge } from '../../lib/portfolio/PortfolioForge'
import { component } from '../../testing/component'
import { screen } from '@testing-library/svelte'
import type { PortfolioItem } from '../../../src/lib/portfolio/types'
import { Category } from '../../../src/lib/portfolio/category'

describe('Portfolio', () => {
    let forge: PortfolioForge
    let items: Record<string, PortfolioItem>

    beforeEach(() => {
        forge = new PortfolioForge()
    })

    test('posts now loaded', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' })
        }

        component(Page)
            .prop('data', {
                item: items.apple,
                all: Object.values(items)
            })
            .render()

        expect(screen.getByText(items.apple.title)).toBeInTheDocument()
    })

    test('related posts', async () => {
        items = {
            apple: forge.create('apple', { category: Category.Games }),
            orange: forge.create('orange', { category: Category.Games }),
            banana: forge.create('banana', { category: Category.Games }),
            carrot: forge.create('carrot', { category: Category.Tools }),
        }

        component(Page)
            .prop('data', {
                item: items.apple,
                all: Object.values(items)
            })
            .render()

        expect(screen.queryByText(items.orange.title)).toBeInTheDocument()
        expect(screen.queryByText(items.banana.title)).toBeInTheDocument()
        expect(screen.queryByText(items.carrot.title)).not.toBeInTheDocument()
    })
})
