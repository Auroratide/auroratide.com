import sudoku from 'Client/components/widgets/Whodoku/sudoku';

describe('sudoku', () => {
  describe('newPuzzle', () => {
    it('should generate an unsolved puzzle', () => {
      const puzzle = sudoku.newPuzzle();

      expect(puzzle).toHaveLength(81);
      expect(puzzle.some(value => !value)).toBe(true);
      expect(puzzle.some(value => value)).toBe(true);
    });
  });
});