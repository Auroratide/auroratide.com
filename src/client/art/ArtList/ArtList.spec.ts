import { ArtList } from '.'
import { component } from '@/testing/component'

describe('ArtList', () => {
    test('rendering', () => {
        expect(() => component(ArtList)
            .render()
        ).not.toThrow()
    })
})
