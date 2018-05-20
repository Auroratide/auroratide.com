import { observable } from 'mobx';

export default class AccordionState {
  @observable expanded = false;
  value = 5;

  expand = () => this.expanded = true;
  collapse = () => this.expanded = false;
  toggle = () => this.expanded = !this.expanded;
}