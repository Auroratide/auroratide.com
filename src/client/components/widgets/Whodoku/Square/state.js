import { observable } from 'mobx';

export default class State {
  @observable value = null;
  canBeEdited = true;

  constructor(value) {
    this.value = value;
    this.canBeEdited = value ? false : true;
  }

  increment() {
    if(++this.value > 9)
      this.value = null;
  }
}
