import { MajorPoint } from '.'
import { component } from '@/testing/component'

describe('MajorPoint', () => {
    test('rendering', () => {
        expect(() => component(MajorPoint)
            .prop('text', 'Some text')
            .render()
        ).not.toThrow()
    })
})
