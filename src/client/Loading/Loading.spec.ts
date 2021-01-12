import { Loading } from '.'
import { component } from '@/testing/component'

describe('Loading', () => {
    test('rendering', () => {
        expect(() => component(Loading)
            .render()
        ).not.toThrow()
    })
})
