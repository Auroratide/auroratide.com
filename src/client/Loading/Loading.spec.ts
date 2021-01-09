import { Loading } from '.'
import { component } from '@/testing/component'

describe('Header', () => {
    test('rendering', () => {
        expect(() => component(Loading)
            .render()
        ).not.toThrow()
    })
})
