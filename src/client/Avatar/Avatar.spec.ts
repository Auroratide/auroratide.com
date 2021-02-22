import { Avatar } from '.'
import { component } from '@/testing/component'

describe('Avatar', () => {
    test('rendering', () => {
        expect(() => component(Avatar)
            .render()
        ).not.toThrow()
    })
})
