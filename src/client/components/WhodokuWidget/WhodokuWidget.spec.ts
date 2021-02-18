import { WhodokuWidget } from '.'
import { component } from '@/testing/component'
import { fireEvent, screen } from '@testing-library/svelte'

describe('WhodokuWidget', () => {
    const firstEditablePosition = (squares: HTMLElement[]): number => {
        return squares.findIndex((element: HTMLElement) => {
            return !(element as HTMLButtonElement).disabled
        })
    }

    const elements = {
        get allSquares() { return screen.getAllByTitle('Sudoku Square') },
        get firstEditableSquare() { return elements.allSquares[firstEditablePosition(elements.allSquares)] },
        get resetButton() { return screen.getByText('Reset') },
    }

    beforeEach(() => {
        component(WhodokuWidget)
            .prop('assetspath', '')
            .render()
    })

    test('incrementing a square', async () => {
        await fireEvent.click(elements.firstEditableSquare)
        // TODO when I have internet, check how to make a custom expectation
        expect(elements.firstEditableSquare.querySelector('img')).toHaveAttribute('src', '/1.png')

        await fireEvent.click(elements.firstEditableSquare)
        expect(elements.firstEditableSquare.querySelector('img')).toHaveAttribute('src', '/2.png')
    })

    test('resetting the board', async () => {
        const position = firstEditablePosition(elements.allSquares)

        await fireEvent.click(elements.allSquares[position])
        expect(elements.firstEditableSquare.querySelector('img')).toHaveAttribute('src', '/1.png')

        await fireEvent.click(elements.resetButton)
        expect(elements.firstEditableSquare.querySelector('img')).not.toBeInTheDocument()
    })
})
