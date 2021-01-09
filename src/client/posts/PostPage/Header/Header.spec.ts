import { Header } from '.'
import { component } from '@/testing/component'

describe('Header', () => {
    test('rendering', () => {
        expect(() => component(Header)
            .prop('icon', 'some-icon')
            .prop('title', 'Title')
            .render()
        ).not.toThrow()
    })
})
