import { Nimcard } from '.'
import { component } from '@/testing/component'

describe('Nimcard', () => {
    test('rendering', () => {
        expect(() => component(Nimcard)
            .render()
        ).not.toThrow()
    })
})
