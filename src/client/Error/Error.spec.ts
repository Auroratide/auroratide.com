import { Error } from '.'
import { component } from '@/testing/component'

describe('Error', () => {
    test('rendering', () => {
        expect(() => component(Error)
            .prop('title', 'Error')
            .prop('subtitle', 'An oopsie occurred')
            .render()
        ).not.toThrow()
    })
})
