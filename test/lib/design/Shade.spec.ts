import Shade from '../../../src/lib/design/Shade.svelte'
import { component } from '../../testing/component'
import { screen } from '@testing-library/svelte'

describe('Shade', () => {
    test('shows hex, rgb, and hsl', () => {
        component(Shade)
            .prop('label', 'test')
            .prop('hsl', { h: 210, s: 65, l: 20 })
            .render()

        expect(screen.queryByText(/#123354/)).toBeInTheDocument()
        expect(screen.queryByText(/rgb\(18, 51, 84\)/)).toBeInTheDocument()
        expect(screen.queryByText(/hsl\(210, 65%, 20%\)/)).toBeInTheDocument()
    })

    test('pads hex', () => {
        component(Shade)
            .prop('label', 'test')
            .prop('hsl', { h: 238, s: 100, l: 7 })
            .render()

        expect(screen.queryByText(/#000124/)).toBeInTheDocument()
    })

    test('very light background', () => {
        component(Shade)
            .prop('label', 'test')
            .prop('hsl', { h: 0, s: 0, l: 100 })
            .render()

        expect(screen
            .queryByText(/hsl\(0, 0%, 100%\)/)
            .parentElement.style
            .getPropertyValue('--text-color')
        ).toEqual('#000000')
    })
})
