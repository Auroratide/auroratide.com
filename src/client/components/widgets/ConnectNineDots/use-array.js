import { useState } from 'react';

export class ObservableArray {
  constructor(value, setter) {
    this.value = value;
    this.setter = setter;
  }

  get = i => this.value[i];

  push = n => {
    this.value = [...this.value, n];
    this.setter(this.value);
  }

  get length() {
    return this.value.length;
  }

  clear = () => {
    this.value = [];
    this.setter(this.value);
  }
}

export default () => {
  const [ value, setter ] = useState([]);

  return new ObservableArray(value, setter);
};