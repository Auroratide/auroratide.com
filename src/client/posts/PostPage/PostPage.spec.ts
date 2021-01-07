import { PostPage } from '.'
import { InMemoryApi } from '../api'
import { PostForge } from '../testing/PostForge'
import { component } from '../../../testing/component'

describe('PostPage', () => {
    test('rendering', () => {
        const forge = new PostForge()
        expect(() => component(PostPage)
            .prop('api', new InMemoryApi([forge.create('steganography')]))
            .render()
        ).not.toThrow()
    })
})
