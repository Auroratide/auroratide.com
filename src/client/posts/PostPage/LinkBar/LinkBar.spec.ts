import { LinkBar } from '.'
import { PostForge } from '../../testing/PostForge'
import { component } from '@/testing/component'

describe('LinkBar', () => {
    test('rendering', () => {
        const post = new PostForge().create('id')

        expect(() => component(LinkBar)
            .prop('links', post.links)
            .render()
        ).not.toThrow()
    })
})
