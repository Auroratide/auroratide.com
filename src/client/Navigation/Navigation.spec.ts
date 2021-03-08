import { Navigation } from '.'
import { component } from '@/testing/component'

describe('Navigation', () => {
    test('rendering', () => {
        expect(() => component(Navigation)
            .render()
        ).not.toThrow()
    })
})
