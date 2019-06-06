import { useState } from 'react';

class State {
  constructor(expanded, setExpanded) {
    this.expandedValue = expanded;
    this.setExpanded = setExpanded;
  }

  get expanded() {
    return this.expandedValue;
  }

  expand = () => this.setExpanded(true);
  collapse = () => this.setExpanded(false);
  toggle = () => this.setExpanded(prev => !prev);
}

export default (initialExpanded = false) => {
  const [ expanded, setExpanded ] = useState(initialExpanded);

  return new State(expanded, setExpanded);
};
