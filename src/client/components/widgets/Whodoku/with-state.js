import React, { useReducer, useEffect } from 'react';
import reducer, {
  initialState,
  newPuzzle,
  reset,
  increment
} from './reducer';

export default Component => () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  useEffect(() => dispatch(newPuzzle()), []);

  return <Component
    state={state}
    newPuzzle={() => dispatch(newPuzzle())}
    reset={() => dispatch(reset())}
    increment={i => dispatch(increment(i))}
  />;
};