import { ArtPage } from '.'
import { component } from '@/testing/component'

describe('ArtPage', () => {
    test('rendering', () => {
        expect(() => component(ArtPage)
            .render()
        ).not.toThrow()
    })
})
