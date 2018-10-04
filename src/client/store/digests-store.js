import { observable, computed } from 'mobx';
import { getAll } from 'Client/api/digests';

export default class DigestsStore {
  @observable digests = [];
  @observable isRefreshing = false;

  constructor(root) {
    this.root = root;
  }

  @computed get isEmpty() {
    return this.digests.length === 0;
  }

  async refreshDigests() {
    this.isRefreshing = true;
    this.digests = await getAll();
    this.isRefreshing = false;
  }
}