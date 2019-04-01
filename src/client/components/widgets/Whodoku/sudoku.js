import sudoku from 'sudoku';

const newPuzzle = () => sudoku.makepuzzle().map(n => n !== null ? n + 1 : null);

export default {
  newPuzzle
};