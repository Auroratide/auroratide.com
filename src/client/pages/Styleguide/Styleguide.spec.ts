import { Styleguide } from '.'
import { component } from '@/testing/component'

describe('Styleguide', () => {
    test('rendering', () => {
        expect(() => component(Styleguide)
            .render()
        ).not.toThrow()
    })
})
