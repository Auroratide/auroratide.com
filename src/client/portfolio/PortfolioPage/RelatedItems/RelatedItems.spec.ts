import { RelatedItems } from '.'
import { PortfolioForge } from '../../testing/PortfolioForge'
import { component } from '@/testing/component'

describe('RelatedItems', () => {
    test('rendering', () => {
        const post = new PortfolioForge().create('id')

        expect(() => component(RelatedItems)
            .prop('items', [post])
            .render()
        ).not.toThrow()
    })
})
