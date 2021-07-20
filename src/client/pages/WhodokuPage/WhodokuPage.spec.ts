import { WhodokuPage } from '.'
import { component } from '@/testing/component'

describe('WhodokuPage', () => {
    test('rendering', () => {
        expect(() => component(WhodokuPage)
            .render()
        ).not.toThrow()
    })
})
