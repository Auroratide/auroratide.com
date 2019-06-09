import { addAll, update } from './reducer';

export default class {
  constructor(api, state, dispatch) {
    this.api = api;
    this.state = state;

    this.addItems = items => dispatch(addAll(items));
    this.updateItem = item => dispatch(update(item));
  }

  refreshOne = async id => {
    this.updateItem(await this.api.get(id));
  }

  refreshList = async () => {
    this.addItems(await this.api.getAll());
  }

  item = id => this.state[id];

  list = () => Object.values(this.state);
}