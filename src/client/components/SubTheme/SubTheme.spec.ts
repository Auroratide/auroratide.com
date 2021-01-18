import { SubTheme } from '.'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'

describe('SubTheme', () => {
    test('rendering', () => {
        expect(() => component(SubTheme).render()).not.toThrow()
    })

    test('specified with info', () => {
        component(SubTheme)
            .prop('info', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('info')
    })

    test('specified with warning', () => {
        component(SubTheme)
            .prop('warning', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('warning')
    })

    test('specified with success', () => {
        component(SubTheme)
            .prop('success', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('success')
    })

    test('specified with danger', () => {
        component(SubTheme)
            .prop('danger', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('danger')
    })

    test('specified with empty string', () => {
        component(SubTheme)
            .prop('warning', '')
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('warning')
    })
})
