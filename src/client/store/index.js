import DigestsStore from './digests-store';

export class RootStore {
  constructor() {
    this.digests = new DigestsStore(this);
  }
}

export default new RootStore();