import { observable } from 'mobx';

export default class State {
  @observable board = new Array(81).fill(null);
}