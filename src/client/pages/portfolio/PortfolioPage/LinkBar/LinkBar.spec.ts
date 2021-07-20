import { LinkBar } from '.'
import { PortfolioForge } from '../../testing/PortfolioForge'
import { component } from '@/testing/component'

describe('LinkBar', () => {
    test('rendering', () => {
        const post = new PortfolioForge().create('id')

        expect(() => component(LinkBar)
            .prop('links', post.links)
            .render()
        ).not.toThrow()
    })
})
