import { observable } from 'mobx';
import { get } from 'Client/api/posts';

export default class PostsStore {
  @observable posts = {};

  constructor(root) {
    this.root = root;
  }

  async refreshPostDetails(id) {
    if(!this.posts[id])
      this.posts[id] = await get(id);
  }

  getPost(id) {
    return this.posts[id];
  }
}