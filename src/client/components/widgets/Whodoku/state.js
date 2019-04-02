import { observable } from 'mobx';
import sudoku from './sudoku';
import Square from './Square';

export default class State {
  @observable isSolved = false;
  @observable board = [];

  reset() {
    if(!this.isSolved)
      this.board.forEach(square => square.reset());
  }

  newPuzzle() {
    this.board = sudoku.newPuzzle().map(value => new Square.State(value));
    this.isSolved = false;
  }

  checkForWin() {
    this.isSolved = sudoku.isSolved(this.board.map(square => square.value));
  }
}