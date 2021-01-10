import { ColoredText } from '.'
import { component } from '@/testing/component'

describe('MajorPoint', () => {
    test('rendering', () => {
        expect(() => component(ColoredText)
            .prop('color', '#ffffff')
            .slot('hello')
            .render()
        ).not.toThrow()
    })
})
