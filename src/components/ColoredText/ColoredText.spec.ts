import { ColoredText } from '.'
import { component } from '@/testing/component'

describe('ColoredText', () => {
    test('rendering', () => {
        expect(() => component(ColoredText)
            .prop('color', '#ffffff')
            .slot('hello')
            .render()
        ).not.toThrow()
    })
})
