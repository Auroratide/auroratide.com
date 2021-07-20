import { Palette } from '.'
import { component } from '@/testing/component'

describe('Palette', () => {
    test('rendering', () => {
        expect(() => component(Palette)
            .prop('name', 'Name')
            .render()
        ).not.toThrow()
    })
})
