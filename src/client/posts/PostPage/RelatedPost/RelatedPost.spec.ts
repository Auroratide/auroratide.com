import { RelatedPost } from '.'
import { component } from '@/testing/component'
import { PostForge } from '../../testing/PostForge'

describe('RelatedPost', () => {
    test('rendering', () => {
        const post = new PostForge().create('apple')

        expect(() => component(RelatedPost)
            .prop('post', post)
            .render()
        ).not.toThrow()
    })
})
