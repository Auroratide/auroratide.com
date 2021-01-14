import { ArticleImage } from '.'
import { component } from '@/testing/component'
import { Size } from '.'

describe('ArticleImage', () => {
    test('rendering', () => {
        expect(() => component(ArticleImage)
            .prop('src', '/image.png')
            .prop('alt', 'alternative text')
            .prop('caption', 'some caption')
            .prop('size', Size.lg)
            .render()
        ).not.toThrow()
    })
})
