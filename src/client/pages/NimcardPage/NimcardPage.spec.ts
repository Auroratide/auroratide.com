import { NimcardPage } from '.'
import { component } from '@/testing/component'

describe('NimcardPage', () => {
    test('rendering', () => {
        expect(() => component(NimcardPage)
            .render()
        ).not.toThrow()
    })
})
