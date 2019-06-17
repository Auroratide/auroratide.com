import React from 'react';
import { withAppContext } from 'Test/enzyme';
import sudoku from 'sudoku';

import Whodoku from 'Client/components/widgets/Whodoku';

describe('Whodoku Behaviour', () => {
  let wrapper;

  const firstEditableSquare = () => wrapper.find('.whodoku .square:not(.cannot-edit)').at(0);
  const square = (n) => wrapper.find('.whodoku .square').at(n);
  const click = (square) => square.simulate('click');
  const hasImage = (square, n) => square.find('img').props().src.includes(`${n}.png`);
  const imageFor = square => square.find('img').props().src;
  const solve = wrapper => {
    const board = wrapper.find('Whodoku').props().state.board;
    const solvedPuzzle = sudoku
      .solvepuzzle(board
        .map(square => square ? square - 1 : null)
      ).map(n => n + 1);

    solvedPuzzle.forEach((correctValue, i) => {
      let board = wrapper.find('Whodoku').props().state.board;
      while(board[i] !== correctValue) {
        click(square(i));
        board = wrapper.find('Whodoku').props().state.board;
      }
    });
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
    expect(wrapper.find('.solved-text')).toHaveLength(0);

    solve(wrapper);
    expect(wrapper.find('.solved-text')).toHaveLength(1);

    const imageBefore = imageFor(firstEditableSquare());
    click(firstEditableSquare());
    expect(imageFor(firstEditableSquare())).toEqual(imageBefore);
  });

});