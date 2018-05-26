import { observable } from 'mobx';
import { getAll } from 'Client/api/digests';

export default class DigestsStore {
  @observable digests = [];

  constructor(root) {
    this.root = root;
  }

  async refreshDigests() {
    this.digests = await getAll();
  }
}