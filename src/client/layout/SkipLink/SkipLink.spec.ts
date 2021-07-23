import { SkipLink } from '.'
import { component } from '@/testing/component'

describe('SkipLink', () => {
    test('rendering', () => {
        expect(() => component(SkipLink)
            .render()
        ).not.toThrow()
    })
})
