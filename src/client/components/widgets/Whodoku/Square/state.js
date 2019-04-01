import { observable } from 'mobx';

export default class State {
  @observable value = null;

  constructor(value) {
    this.value = value;
  }

  increment() {
    if(++this.value > 9)
      this.value = null;
  }
}
