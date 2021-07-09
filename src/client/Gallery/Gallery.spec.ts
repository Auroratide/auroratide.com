import { Gallery } from '.'
import { component } from '@/testing/component'
import { AssetUrlBuilder } from '@/client/routes'

describe('Gallery', () => {
    test('rendering', () => {
        const root = new AssetUrlBuilder('')
        const item = {
            image: 'hello.png',
            caption: 'Hello!',
        }

        expect(() => component(Gallery)
            .prop('root', root)
            .prop('gallery', [item])
            .render()
        ).not.toThrow()
    })
})
