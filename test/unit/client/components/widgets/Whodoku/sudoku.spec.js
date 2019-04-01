import sudoku from 'Client/components/widgets/Whodoku/sudoku';

describe('sudoku', () => {
  const N = null;

  describe('newPuzzle', () => {
    it('should generate an unsolved puzzle', () => {
      const puzzle = sudoku.newPuzzle();

      expect(puzzle).toHaveLength(81);
      expect(puzzle.some(value => !value)).toBe(true);
      expect(puzzle.some(value => value)).toBe(true);
    });
  });

  describe('isSolved', () => {
    it('should return false when some squares are empty', () => {
      /* eslint-disable indent */
      const puzzle = [1, N, N, N, N, N, N, N, N,
                      N, 2, N, N, N, N, N, N, N,
                      N, N, 3, N, N, N, N, N, N,
                      N, N, N, 4, N, N, N, N, N,
                      N, N, N, N, 5, N, N, N, N,
                      N, N, N, N, N, 6, N, N, N,
                      N, N, N, N, N, N, 7, N, N,
                      N, N, N, N, N, N, N, 8, N,
                      N, N, N, N, N, N, N, N, 9];
      /* eslint-enable indent */

      expect(sudoku.isSolved(puzzle)).toBe(false);
    });

    it('should return true when the puzzle is solved', () => {
      /* eslint-disable indent */
      const puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                      4, 5, 6, 7, 8, 9, 1, 2, 3,
                      7, 8, 9, 1, 2, 3, 4, 5, 6,
                      2, 3, 4, 5, 6, 7, 8, 9, 1,
                      5, 6, 7, 8, 9, 1, 2, 3, 4,
                      8, 9, 1, 2, 3, 4, 5, 6, 7,
                      3, 4, 5, 6, 7, 8, 9, 1, 2,
                      6, 7, 8, 9, 1, 2, 3, 4, 5,
                      9, 1, 2, 3, 4, 5, 6, 7, 8];
      /* eslint-enable indent */

      expect(sudoku.isSolved(puzzle)).toBe(true);
    });

    it('should return false when the puzzle is filled but wrong', () => {
      /* eslint-disable indent */
      const puzzle = [1, 1, 3, 4, 5, 6, 7, 8, 9,
                      4, 5, 6, 7, 8, 9, 1, 2, 3,
                      7, 8, 9, 1, 2, 3, 4, 5, 6,
                      2, 3, 4, 5, 6, 7, 8, 9, 1,
                      5, 6, 7, 8, 9, 1, 2, 3, 4,
                      8, 9, 1, 2, 3, 4, 5, 6, 7,
                      3, 4, 5, 6, 7, 8, 9, 1, 2,
                      6, 7, 8, 9, 1, 2, 3, 4, 5,
                      9, 1, 2, 3, 4, 5, 6, 7, 8];
      /* eslint-enable indent */

      expect(sudoku.isSolved(puzzle)).toBe(false);
    });
  });
});