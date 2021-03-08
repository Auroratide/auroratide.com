import { $NAME$ } from '.'
import { component } from '@/testing/component'

describe('$NAME$', () => {
    test('rendering', () => {
        expect(() => component($NAME$)
            .render()
        ).not.toThrow()
    })
})
