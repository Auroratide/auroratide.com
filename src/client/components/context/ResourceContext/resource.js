import { addAll, update } from './reducer';

export default class {
  constructor(api, state, dispatch) {
    this.api = api;
    this.state = state;

    this.addItems = items => dispatch(addAll(items));
    this.updateItem = item => dispatch(update(item));
  }

  refreshList = async () => {
    this.addItems(await this.api.getAll());
  }

  list = () =>  Object.values(this.state);
}