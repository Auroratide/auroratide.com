import { Gallery } from '.'
import { PortfolioForge } from '../../testing/PortfolioForge'
import { component } from '@/testing/component'

describe('Gallery', () => {
    test('rendering', () => {
        const post = new PortfolioForge().create('id')

        expect(() => component(Gallery)
            .prop('id', post.id)
            .prop('gallery', post.gallery)
            .render()
        ).not.toThrow()
    })
})
