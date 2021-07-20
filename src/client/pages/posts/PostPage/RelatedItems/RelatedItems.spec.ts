import { RelatedItems } from '.'
import { PostForge } from '../../testing/PostForge'
import { component } from '@/testing/component'

describe('RelatedItems', () => {
    test('rendering', () => {
        const post = new PostForge().create('id')

        expect(() => component(RelatedItems)
            .prop('items', [post])
            .render()
        ).not.toThrow()
    })
})
