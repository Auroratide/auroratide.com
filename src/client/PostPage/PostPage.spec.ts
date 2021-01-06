import { PostPage } from '.'
import { component } from '../../testing/component'

describe('PostPage', () => {
    test('rendering', () => {
        expect(() => component(PostPage).render()).not.toThrow()
    })
})
