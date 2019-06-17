import sudoku from './sudoku';

const NEW_PUZZLE = 'Whodoku::NEW_PUZZLE';
export const newPuzzle = () => ({ type: NEW_PUZZLE });
const reduceNewPuzzle = state => {
  const values = sudoku.newPuzzle();
  return {
    ...state,
    original: values,
    board: [...values]
  };
};

const RESET = 'Whodoku::RESET';
export const reset = () => ({ type: RESET } );
const reduceReset = state => ( {
  ...state,
  board: [...state.original]
} );

const INCREMENT = 'Whodoku::INCREMENT';
export const increment = (position) => ( {
  type: INCREMENT,
  position
} );
const reduceIncrement = (state, { position }) => {
  const board = [...state.board];
  if(++board[position] > 9)
    board[position] = null;
  
  return {
    ...state,
    isSolved: sudoku.isSolved(board),
    board
  };
};

export const initialState = {
  isSolved: false,
  original: [],
  board: []
};

export default (state, { type, ...payload }) => {
  switch(type) {
    case NEW_PUZZLE: return reduceNewPuzzle(state, payload);
    case RESET: return reduceReset(state, payload);
    case INCREMENT: return reduceIncrement(state, payload);
    default: return state;
  }
};