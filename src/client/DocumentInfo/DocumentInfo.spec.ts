import { DocumentInfo } from '.'
import { component } from '@/testing/component'

describe('DocumentInfo', () => {
    test('rendering', () => {
        expect(() => component(DocumentInfo)
            .prop('title', 'hello')
            .render()
        ).not.toThrow()
    })
})
