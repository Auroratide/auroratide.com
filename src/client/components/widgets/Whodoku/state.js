import { observable } from 'mobx';
import sudoku from './sudoku';
import Square from './Square';

export default class State {
  @observable board = [];

  newPuzzle() {
    this.board = sudoku.newPuzzle().map(value => new Square.State(value));
  }
}