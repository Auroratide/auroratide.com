import { SandboxPage } from '.'
import { component } from '@/testing/component'

describe('SandboxPage', () => {
    test('rendering', () => {
        expect(() => component(SandboxPage)
            .render()
        ).not.toThrow()
    })
})
