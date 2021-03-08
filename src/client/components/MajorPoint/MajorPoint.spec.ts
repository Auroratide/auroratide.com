import { MajorPoint } from '.'
import { component } from '@/testing/component'

describe('MajorPoint', () => {
    test('rendering', () => {
        expect(() => component(MajorPoint)
            .slot('hello')
            .render()
        ).not.toThrow()
    })
})
