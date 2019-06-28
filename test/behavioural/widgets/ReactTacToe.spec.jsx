import React from 'react';
import { mount } from 'Test/enzyme';
import ReactTacToe from 'Client/components/widgets/ReactTacToe';

describe('ReactTacToe', () => {
  let wrapper;
  const clickSquare = n => wrapper.find('.tile').at(n).simulate('click');
  const squareMark = n => wrapper.find('.tile').at(n).text();

  describe('when the board is empty', () => {
    it('should populate the first square clicked with an X', () => {
      wrapper = mount(<ReactTacToe />);
      expect(squareMark(0)).toEqual('');

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');
    });

    it('should alternate turns between X and O', () => {
      wrapper = mount(<ReactTacToe />);

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');

      clickSquare(1);
      expect(squareMark(1)).toEqual('O');

      clickSquare(2);
      expect(squareMark(2)).toEqual('X');

      clickSquare(3);
      expect(squareMark(3)).toEqual('O');
    });

    it('should not allow the same square to be clicked more than once', () => {
      wrapper = mount(<ReactTacToe />);

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');
    });
  });

  describe('when the board has marks', () => {
    const clickReset = () => wrapper.find('.reset-button').at(0).simulate('click');

    it('should clear the board when the reset button is clicked', () => {
      const initialBoard = ['X', '', 'O', '', '', '', '', '', ''];
      wrapper = mount(<ReactTacToe initialBoard={initialBoard} />);

      clickReset();
      initialBoard.forEach((_, i) => {
        expect(squareMark(i)).toEqual('');
      });
    });
  });

  describe('when the board is complete', () => {
    const isHighlighted = n => wrapper.find('.tile').at(n).hasClass('highlight');

    it('should highlight the tiles containing winning marks', () => {
      const initialBoard = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      wrapper = mount(<ReactTacToe initialBoard={initialBoard} />);

      expect(isHighlighted(0)).toBe(true);
      expect(isHighlighted(3)).toBe(true);
      expect(isHighlighted(6)).toBe(true);

      expect(isHighlighted(1)).toBe(false);
      expect(isHighlighted(2)).toBe(false);
      expect(isHighlighted(4)).toBe(false);
      expect(isHighlighted(5)).toBe(false);
      expect(isHighlighted(7)).toBe(false);
      expect(isHighlighted(8)).toBe(false);
    });

    it('should prevent tile selection when a player has won', () => {
      const initialBoard = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      wrapper = mount(<ReactTacToe initialBoard={initialBoard} />);

      clickSquare(8);
      expect(squareMark(8)).toEqual('');
    });
  });
});