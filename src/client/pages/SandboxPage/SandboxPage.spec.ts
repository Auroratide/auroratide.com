import { SandboxPage } from '.'
import { component } from '@/testing/component'

describe('SandboxPage', () => {
    test('rendering', () => {
        expect(() => component(SandboxPage)
            .prop('fetch', () => Promise.resolve({
                json: () => ({ content: '' })
            }))
            .render()
        ).not.toThrow()
    })
})
