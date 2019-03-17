import DigestsStore from './digests-store';
import ResourceStore from './resource-store';
import * as PostsApi from 'Client/api/posts';

export class RootStore {
  constructor() {
    this.digests = new DigestsStore(this);
    this.posts = new ResourceStore(this, PostsApi);
  }
}

export default new RootStore();