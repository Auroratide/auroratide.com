import { Container } from '.'
import { component } from '../../testing/component'

describe('Container', () => {
    test.skip('rendering', () => {
        expect(() => component(Container).render()).not.toThrow()
    })
})
