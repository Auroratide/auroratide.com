import { observable } from 'mobx';
import sudoku from './sudoku';
import Square from './Square';

export default class State {
  @observable board = [];

  reset() {
    this.board.forEach(square => square.reset());
  }

  newPuzzle() {
    this.board = sudoku.newPuzzle().map(value => new Square.State(value));
  }
}