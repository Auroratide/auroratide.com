import { observable } from 'mobx';

export default class ErrorBoundaryState {
  @observable hasError = false;
}