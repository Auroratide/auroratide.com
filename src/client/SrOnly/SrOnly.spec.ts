import { SrOnly } from '.'
import { component } from '@/testing/component'

describe('SrOnly', () => {
    test('rendering', () => {
        expect(() => component(SrOnly)
            .render()
        ).not.toThrow()
    })
})
