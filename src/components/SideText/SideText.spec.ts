import { SideText } from '.'
import { screen } from '@testing-library/svelte'
import { component } from '@/testing/component'
import '@testing-library/jest-dom'

describe('SideText', () => {
    test('rendering', () => {
        expect(() => component(SideText).render()).not.toThrow()
    })

    test('specified with warning', () => {
        component(SideText)
            .prop('warning', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('warning')
    })

    test('specified with success', () => {
        component(SideText)
            .prop('success', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('success')
    })

    test('specified with danger', () => {
        component(SideText)
            .prop('danger', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('danger')
    })

    test('specified with empty string', () => {
        component(SideText)
            .prop('warning', '')
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('warning')
    })
})
