import { AccessibilityPage } from '.'
import { component } from '@/testing/component'

describe('AccessibilityPage', () => {
    test('rendering', () => {
        expect(() => component(AccessibilityPage)
            .render()
        ).not.toThrow()
    })
})
