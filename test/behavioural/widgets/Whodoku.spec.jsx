import React from 'react';
import { withAppContext } from 'Test/enzyme';
import sudoku from 'sudoku';

import Whodoku from 'Client/components/widgets/Whodoku';

describe('Whodoku Behaviour', () => {
  let wrapper;

  const firstEditableSquare = () => wrapper.find('.whodoku .square:not(.cannot-edit)').at(0);
  const click = (square) => square.simulate('click');
  const hasImage = (square, n) => square.find('img').props().src.includes(`${n}.png`);
  const imageFor = square => square.find('img').props().src;
  const solve = state => {
    const solvedPuzzle = sudoku
      .solvepuzzle(state.board
        .map(square => square.value ? square.value - 1 : null)
      ).map(n => n + 1);

    state.board.forEach((square, i) => square.value = solvedPuzzle[i]);
    state.checkForWin();
    wrapper.update();
  };

  beforeEach(() => {
    wrapper = withAppContext().mount(<Whodoku />);
  });

  it('should increment square state when clicked', () => {
    expect(firstEditableSquare().find('img')).toHaveLength(0);

    click(firstEditableSquare());
    expect(hasImage(firstEditableSquare(), 1)).toBe(true);

    click(firstEditableSquare());
    expect(hasImage(firstEditableSquare(), 2)).toBe(true);
  });

  it('should declare when the board has been solved and prevent further editing', () => {
    const state = wrapper.find('Whodoku').props().state;
    
    expect(wrapper.find('.solved-text')).toHaveLength(0);

    solve(state);
    expect(wrapper.find('.solved-text')).toHaveLength(1);

    const imageBefore = imageFor(firstEditableSquare());
    click(firstEditableSquare());
    expect(imageFor(firstEditableSquare())).toEqual(imageBefore);
  });

});