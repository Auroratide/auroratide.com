import { observable, computed } from 'mobx';
import { get, getAll } from 'Client/api/posts';
import RefreshableStore from './refreshable-store';

export default class PostsStore extends RefreshableStore {
  @observable posts = {};

  constructor(root) {
    super();
    this.root = root;
  }

  async refreshPostDetails(id) {
    if(!this.posts[id] || !this.posts[id].content) {
      this.posts[id] = await this.withRefresh(() => get(id));
    }
  }

  async refreshPostsList() {
    await this.withRefresh(async () =>
      (await getAll()).forEach(post => {
        if(!this.posts[post.id])
          this.posts[post.id] = post;
      })
    );
  }

  @computed get isEmpty() {
    return Object.keys(this.posts).length === 0;
  }

  getPost(id) {
    return this.posts[id];
  }

  getPostsList() {
    return Object.values(this.posts);
  }

  static sorter() {
    return {
      byPublishedDate: (lhs, rhs) => new Date(rhs.publishedAt) - new Date(lhs.publishedAt)
    };
  }

  static filter() {
    return {
      withCategory: category => post => post.category === category,
      without: id => post => post.id !== id,
      top: n => (_, index) => index < n
    };
  }
}