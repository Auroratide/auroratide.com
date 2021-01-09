import { Container } from '.'
import { component } from '../../testing/component'

describe('Container', () => {
    test('rendering', () => {
        expect(() => component(Container).render()).not.toThrow()
    })
})
