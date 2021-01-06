import { SideText } from '.'
import { screen } from '@testing-library/svelte'
import { component } from '../../testing/component'
import '@testing-library/jest-dom'

describe('SideText', () => {
    test('rendering', () => {
        expect(() => component(SideText).render()).not.toThrow()
    })

    test('specified with info', () => {
        component(SideText)
            .prop('info', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('info')
    })

    test('specified with warning', () => {
        component(SideText)
            .prop('warning', true)
            .slot('Info')
            .render()

        expect(screen.getByText('Info')).toHaveClass('warning')
    })
})
