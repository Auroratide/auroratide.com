import { Shade } from '.'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'

describe('Shade', () => {
    test('shows hex and rgb', () => {
        component(Shade)
            .prop('hex', 0x123456)
            .render()

        expect(screen.queryByText('#123456')).toBeInTheDocument()
        expect(screen.queryByText('rgb(18, 52, 86)')).toBeInTheDocument()
    })

    test('pads hex', () => {
        component(Shade)
            .prop('hex', 0x000123)
            .render()

        expect(screen.queryByText('#000123')).toBeInTheDocument()
    })
})
