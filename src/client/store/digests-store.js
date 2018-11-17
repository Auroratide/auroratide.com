import { observable, computed } from 'mobx';
import { getAll } from 'Client/api/digests';
import RefreshableStore from './refreshable-store';

export default class DigestsStore extends RefreshableStore {
  @observable digests = [];

  constructor(root) {
    super();
    this.root = root;
  }

  @computed get isEmpty() {
    return this.digests.length === 0;
  }

  async refreshDigests() {
    this.digests = await this.withRefresh(() => getAll());
  }
}