import { observable, computed } from 'mobx';
import RefreshableStore from './refreshable-store';

export default class ResourceStore extends RefreshableStore {
  @observable elements = {};

  constructor(root, api) {
    super();
    this.root = root;
    this.api = api;
  }

  async refreshDetails(id) {
    if(!this.elements[id] || !this.elements[id].content) {
      this.elements[id] = await this.withRefresh(() => this.api.get(id));
    }
  }

  async refreshList() {
    await this.withRefresh(async () =>
      (await this.api.getAll()).forEach(e => {
        if(!this.elements[e.id])
          this.elements[e.id] = e;
      })
    );
  }

  @computed get isEmpty() {
    return Object.keys(this.elements).length === 0;
  }

  get(id) {
    return this.elements[id];
  }

  list() {
    return Object.values(this.elements);
  }
}