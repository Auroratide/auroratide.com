import sudoku from 'sudoku';

const newPuzzle = () => sudoku.makepuzzle().map(n => n !== null ? n + 1 : null);

const isSolved = puzzle =>
  puzzle.every(n => 1 <= n && n <= 9) && sudoku.solvepuzzle(puzzle.map(n => n - 1)) !== null;

export default {
  newPuzzle,
  isSolved
};