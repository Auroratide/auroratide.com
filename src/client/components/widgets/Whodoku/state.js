import { observable } from 'mobx';

export default class State {
  @observable board = new Array(81).fill(null);

  increment(position) {
    if(++this.board[position] > 9)
      this.board[position] = null;
  }
}