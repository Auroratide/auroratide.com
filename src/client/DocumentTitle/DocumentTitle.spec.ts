import { DocumentTitle } from '.'
import { component } from '@/testing/component'

describe('DocumentTitle', () => {
    test('rendering', () => {
        expect(() => component(DocumentTitle)
            .prop('title', 'hello')
            .render()
        ).not.toThrow()
    })
})
