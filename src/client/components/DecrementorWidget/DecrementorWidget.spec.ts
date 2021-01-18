import { DecrementorWidget } from '.'
import { component } from '@/testing/component'
import { fireEvent, screen } from '@testing-library/svelte'

describe('DecrementorWidget', () => {
    test('decrementing', async () => {
        component(DecrementorWidget)
            .prop('initialvalue', 10)
            .prop('increment', 2)
            .render()

        expect(screen.getByText('10')).toBeInTheDocument()
        
        await fireEvent.click(screen.getByText('Decrement'))
        expect(screen.getByText('8')).toBeInTheDocument()
    })
})
