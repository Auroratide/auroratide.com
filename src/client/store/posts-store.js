import { observable } from 'mobx';
import { get, getAll } from 'Client/api/posts';

export default class PostsStore {
  @observable posts = {};

  constructor(root) {
    this.root = root;
  }

  async refreshPostDetails(id) {
    if(!this.posts[id] || !this.posts[id].content)
      this.posts[id] = await get(id);
  }

  async refreshPostsList() {
    (await getAll()).forEach(post => {
      if(!this.posts[post.id])
        this.posts[post.id] = post;
    });
  }

  getPost(id) {
    return this.posts[id];
  }

  getPostsList() {
    return Object.values(this.posts).sort((lhs, rhs) => {
      return new Date(rhs.publishedAt) - new Date(lhs.publishedAt);
    });
  }
}