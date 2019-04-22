import DigestsStore from './digests-store';
import PostsStore from './posts-store';

export class RootStore {
  constructor() {
    this.digests = new DigestsStore(this);
    this.posts = new PostsStore(this);
  }
}

export default new RootStore();