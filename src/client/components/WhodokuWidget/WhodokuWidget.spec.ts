import { WhodokuWidget } from '.'
import { component } from '@/testing/component'
import { fireEvent, screen } from '@testing-library/svelte'
import { SudokuValue } from './Sudoku'
import sudokuEngine from 'sudoku'

describe('WhodokuWidget', () => {
    const firstEditablePosition = (squares: HTMLElement[]): number => {
        return squares.findIndex((element: HTMLElement) => {
            return !(element as HTMLButtonElement).disabled
        })
    }

    const valueOf = (square: HTMLElement): SudokuValue => {
        const img = square.querySelector('img')
        if (img) {
            return parseInt(img.src.match(/\d/)[0])
        } else {
            return SudokuValue.Empty
        }
    }

    const elements = {
        get allSquares() { return screen.getAllByTitle('Sudoku Square') },
        get firstEditableSquare() { return elements.allSquares[firstEditablePosition(elements.allSquares)] },
        get resetButton() { return screen.getByText('Reset') },
        get solutionText() { return screen.queryByText(/solved/) },
    }

    const actions = {
        increment: (square: HTMLElement) => fireEvent.click(square),
        reset: () => fireEvent.click(elements.resetButton),
        solve: async () => {
            const allSquares = elements.allSquares
            const board = allSquares
                .map(square => valueOf(square))
                .map(n => n === SudokuValue.Empty ? null : n - 1)
            
            const solved: SudokuValue[] = sudokuEngine.solvepuzzle(board)
                .map((n: number) => n + 1)

            for (var position = 0; position < allSquares.length; ++position) {
                const square = allSquares[position]
                var guard = 0
                while (valueOf(square) !== solved[position] && ++guard < 10)
                    await actions.increment(square)
            }

            // Assert that the solving algorithm is accurate
            const finalResult = allSquares.map(square => valueOf(square))
            if (solved.some((n, i) => n !== finalResult[i]))
                throw 'ERROR solving whodoku: Final result did not match solution.'
        }
    }

    beforeEach(() => {
        component(WhodokuWidget)
            .prop('assetspath', '')
            .render()
    })

    test('incrementing a square', async () => {
        await actions.increment(elements.firstEditableSquare)
        expect(valueOf(elements.firstEditableSquare)).toEqual(SudokuValue.One)

        await actions.increment(elements.firstEditableSquare)
        expect(valueOf(elements.firstEditableSquare)).toEqual(SudokuValue.Two)
    })

    test('resetting the board', async () => {
        const position = firstEditablePosition(elements.allSquares)

        await actions.increment(elements.allSquares[position])
        expect(valueOf(elements.allSquares[position])).toEqual(SudokuValue.One)

        await actions.reset()
        expect(valueOf(elements.allSquares[position])).toEqual(SudokuValue.Empty)
    })

    test('solving the puzzle', async () => {
        expect(elements.solutionText).not.toBeInTheDocument()

        const anEditablePosition = firstEditablePosition(elements.allSquares)

        await actions.solve()
        expect(elements.solutionText).toBeInTheDocument()

        const valueBefore = valueOf(elements.allSquares[anEditablePosition])
        await actions.increment(elements.allSquares[anEditablePosition])
        expect(valueOf(elements.allSquares[anEditablePosition])).toEqual(valueBefore)
    })
})
