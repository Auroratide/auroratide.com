import { Content } from '.'
import { component } from '@/testing/component'

describe('Content', () => {
    test('rendering', () => {
        expect(() => component(Content)
            .render()
        ).not.toThrow()
    })
})
