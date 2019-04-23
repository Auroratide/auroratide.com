import DigestsStore from './digests-store';
import PostsStore from './posts-store';
import ProjectsStore from './projects-store';

export class RootStore {
  constructor() {
    this.digests = new DigestsStore(this);
    this.posts = new PostsStore(this);
    this.projects = new ProjectsStore(this);
  }
}

export default new RootStore();