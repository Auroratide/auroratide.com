import DigestsStore from './digests-store';
import PostsStore from './posts-store';
import PortfolioStore from './portfolio-store';

export class RootStore {
  constructor() {
    this.digests = new DigestsStore(this);
    this.posts = new PostsStore(this);
    this.portfolio = new PortfolioStore(this);
  }
}

export default new RootStore();