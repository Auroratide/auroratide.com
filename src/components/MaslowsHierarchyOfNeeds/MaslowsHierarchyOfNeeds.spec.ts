import { MaslowsHierarchyOfNeeds } from '.'
import { component } from '../../testing/component'

describe('MaslowsHierarchyOfNeeds', () => {
    test('rendering', () => {
        expect(() => component(MaslowsHierarchyOfNeeds)
            .render()
        ).not.toThrow()
    })
})
