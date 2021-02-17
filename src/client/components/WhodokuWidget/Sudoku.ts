export class Sudoku {
    public board: SudokuValue[]

    constructor(board: SudokuValue[]) {
        this.board = board
    }

    public increment(position: number): Sudoku {
        const newBoard = [...this.board]
        // TODO when you have internet, is there a better way to do this with enums?
        newBoard[position] = (newBoard[position] + 1) % 10

        return new Sudoku(newBoard)
    }

    public isSolved(): boolean {
        return false
    }
    
    static newPuzzle(): Sudoku {
        return new Sudoku(new Array(81).fill(SudokuValue.Empty))
    }
}

export enum SudokuValue {
    Empty,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
}
