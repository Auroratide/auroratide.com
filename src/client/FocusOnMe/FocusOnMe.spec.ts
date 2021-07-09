import { FocusOnMe } from '.'
import { component } from '@/testing/component'

describe('FocusOnMe', () => {
    test('rendering', () => {
        expect(() => component(FocusOnMe)
            .render()
        ).not.toThrow()
    })
})
