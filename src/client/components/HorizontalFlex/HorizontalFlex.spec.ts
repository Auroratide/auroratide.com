import { HorizontalFlex } from '.'
import { component } from '@/testing/component'

describe('HorizontalFlex', () => {
    test('rendering', () => {
        expect(() => component(HorizontalFlex)
            .render()
        ).not.toThrow()
    })
})
