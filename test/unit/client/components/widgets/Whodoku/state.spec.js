import State from 'Client/components/widgets/Whodoku/state';

describe('Whodoku state', () => {
  let state;

  beforeEach(() => {
    state = new State();
  });

  describe('increment', () => {
    it('should increment the board state at the position by one', () => {
      state.board[2] = 2;

      state.increment(2);

      expect(state.board[2]).toEqual(3);
    });

    it('should set board state to 1 when the position is empty', () => {
      state.board[3] = null;

      state.increment(3);

      expect(state.board[3]).toEqual(1);
    });

    it('should set board state to null when the state at the position is 9', () => {
      state.board[4] = 9;

      state.increment(4);

      expect(state.board[4]).toBeNull();
    });
  });
});