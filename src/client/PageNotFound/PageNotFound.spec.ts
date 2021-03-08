import { PageNotFound } from '.'
import { component } from '@/testing/component'

describe('PageNotFound', () => {
    test('rendering', () => {
        expect(() => component(PageNotFound)
            .render()
        ).not.toThrow()
    })
})
