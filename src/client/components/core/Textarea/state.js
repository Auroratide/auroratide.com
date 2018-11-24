import { observable } from 'mobx';

export default class State {
  @observable text = '';

  constructor(initialText = '') {
    this.text = initialText;
  }
}