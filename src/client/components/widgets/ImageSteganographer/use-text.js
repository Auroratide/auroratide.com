import { useState } from 'react';

export class Text {
  constructor(value, setter = () => {}) {
    this.value = value;
    this.setter = setter;
  }

  get = () => this.value;

  set = (value) => {
    this.value = value;
    this.setter(value);
  };
}

export default initial => {
  const [ value, setter ] = useState(initial);

  return new Text(value, setter);
};