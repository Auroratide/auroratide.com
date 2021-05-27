import { CatastrophicError } from '.'
import { component } from '@/testing/component'

describe('CatastrophicError', () => {
    test('rendering', () => {
        expect(() => component(CatastrophicError)
            .render()
        ).not.toThrow()
    })
})
