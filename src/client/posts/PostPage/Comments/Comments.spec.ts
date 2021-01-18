import { Comments } from '.'
import { component } from '@/testing/component'

describe('Comments', () => {
    test('rendering', () => {
        expect(() => component(Comments)
            .prop('id', 'a-post')
            .render()
        ).not.toThrow()
    })
})
