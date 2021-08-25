import { Carica } from '.'
import { component } from '@/testing/component'

describe('Carica', () => {
    test('rendering', () => {
        expect(() => component(Carica)
            .render()
        ).not.toThrow()
    })
})
