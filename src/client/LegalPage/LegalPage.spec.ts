import { LegalPage } from '.'
import { component } from '@/testing/component'

describe('LegalPage', () => {
    test('rendering', () => {
        expect(() => component(LegalPage)
            .render()
        ).not.toThrow()
    })
})
