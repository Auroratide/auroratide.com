import { AboutPage } from '.'
import { component } from '@/testing/component'

describe('AboutPage', () => {
    test('rendering', () => {
        expect(() => component(AboutPage)
            .render()
        ).not.toThrow()
    })
})
