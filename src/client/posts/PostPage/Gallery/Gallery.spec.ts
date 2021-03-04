import { Gallery } from '.'
import { PostForge } from '../../testing/PostForge'
import { component } from '@/testing/component'

describe('Gallery', () => {
    test('rendering', () => {
        const post = new PostForge().create('id')

        expect(() => component(Gallery)
            .prop('id', post.id)
            .prop('gallery', post.gallery)
            .render()
        ).not.toThrow()
    })
})
