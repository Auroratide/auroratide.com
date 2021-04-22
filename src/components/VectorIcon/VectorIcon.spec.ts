import { VectorIcon, IconName } from '.'
import { component } from '@/testing/component'

describe('VectorIcon', () => {
    test('rendering', () => {
        expect(() => component(VectorIcon)
            .prop('icon', IconName.LayerGroup)
            .render()
        ).not.toThrow()
    })
})
