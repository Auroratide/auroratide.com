import { Sudoku } from './Sudoku'

describe('Sudoku', () => {
    const N = 0

    // TODO Unskip once you have internet and can install sudoku from npm
    describe.skip('newPuzzle', () => {
        test('making a new puzzle', () => {
            const puzzle = Sudoku.newPuzzle()

            expect(puzzle.board.length).toEqual(81)
            expect(puzzle.isSolved()).toBe(false)
        })
    })

    describe('increment', () => {
        test('incrementing a square', () => {
            const board = [1, N, N, N, N, N, N, N, N,
                           N, 2, N, N, N, N, N, N, N,
                           N, N, 3, N, N, N, N, N, N,
                           N, N, N, 4, N, N, N, N, N,
                           N, N, N, N, 5, N, N, N, N,
                           N, N, N, N, N, 6, N, N, N,
                           N, N, N, N, N, N, 7, N, N,
                           N, N, N, N, N, N, N, 8, N,
                           N, N, N, N, N, N, N, N, 9]
            let puzzle = new Sudoku(board)
    
            puzzle = puzzle
                .increment(0)
                .increment(0)
                .increment(1)
                .increment(80)
            
            expect(puzzle.board).toEqual(
                [3, 1, N, N, N, N, N, N, N,
                 N, 2, N, N, N, N, N, N, N,
                 N, N, 3, N, N, N, N, N, N,
                 N, N, N, 4, N, N, N, N, N,
                 N, N, N, N, 5, N, N, N, N,
                 N, N, N, N, N, 6, N, N, N,
                 N, N, N, N, N, N, 7, N, N,
                 N, N, N, N, N, N, N, 8, N,
                 N, N, N, N, N, N, N, N, N]
            )
        })
    })

    describe('isSolved', () => {
        test('some squares are empty', () => {
            const board = [1, N, N, N, N, N, N, N, N,
                           N, 2, N, N, N, N, N, N, N,
                           N, N, 3, N, N, N, N, N, N,
                           N, N, N, 4, N, N, N, N, N,
                           N, N, N, N, 5, N, N, N, N,
                           N, N, N, N, N, 6, N, N, N,
                           N, N, N, N, N, N, 7, N, N,
                           N, N, N, N, N, N, N, 8, N,
                           N, N, N, N, N, N, N, N, 9]
            const puzzle = new Sudoku(board)

            expect(puzzle.isSolved()).toBe(false)
        })

        // TODO Unskip once you have internet and can install sudoku from npm
        test.skip('puzzle is solved', () => {
            const board = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                           4, 5, 6, 7, 8, 9, 1, 2, 3,
                           7, 8, 9, 1, 2, 3, 4, 5, 6,
                           2, 3, 4, 5, 6, 7, 8, 9, 1,
                           5, 6, 7, 8, 9, 1, 2, 3, 4,
                           8, 9, 1, 2, 3, 4, 5, 6, 7,
                           3, 4, 5, 6, 7, 8, 9, 1, 2,
                           6, 7, 8, 9, 1, 2, 3, 4, 5,
                           9, 1, 2, 3, 4, 5, 6, 7, 8]
            const puzzle = new Sudoku(board)

            expect(puzzle.isSolved()).toBe(true)
        })

        test('puzzle filled incorrectly', () => {
            const board = [1, 1, 3, 4, 5, 6, 7, 8, 9,
                           4, 5, 6, 7, 8, 9, 1, 2, 3,
                           7, 8, 9, 1, 2, 3, 4, 5, 6,
                           2, 3, 4, 5, 6, 7, 8, 9, 1,
                           5, 6, 7, 8, 9, 1, 2, 3, 4,
                           8, 9, 1, 2, 3, 4, 5, 6, 7,
                           3, 4, 5, 6, 7, 8, 9, 1, 2,
                           6, 7, 8, 9, 1, 2, 3, 4, 5,
                           9, 1, 2, 3, 4, 5, 6, 7, 8]
            const puzzle = new Sudoku(board)

            expect(puzzle.isSolved()).toBe(false)
        })
    })
})
