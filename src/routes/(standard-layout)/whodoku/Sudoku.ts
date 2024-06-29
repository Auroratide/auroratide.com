import sudokuEngine from 'sudoku'

export type SudokuEngine = {
	makepuzzle: () => number[],
	solvepuzzle: (board: number[]) => number[],
}

export class Sudoku {
	public board: SudokuValue[]
	private engine: SudokuEngine

	constructor(board: SudokuValue[], engine: SudokuEngine = sudokuEngine) {
		this.board = board
		this.engine = engine
	}

	public increment(position: number): Sudoku {
		const newBoard = [...this.board]
		// TODO when you have internet, is there a better way to do this with enums?
		newBoard[position] = (newBoard[position] + 1) % 10

		return new Sudoku(newBoard, this.engine)
	}

	public isSolved(): boolean {
		return this.board.every(n => n !== SudokuValue.Empty) &&
			this.engine.solvepuzzle(this.board.map(n => n - 1)) !== null
	}
	
	static newPuzzle(engine: SudokuEngine = sudokuEngine): Sudoku {
		return new Sudoku(engine.makepuzzle().map(n => n !== null ? n + 1 : SudokuValue.Empty), engine)
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
