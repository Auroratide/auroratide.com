import * as PostsApi from 'Client/api/posts';
import ResourceStore from './resource-store';

export default class PostsStore extends ResourceStore {
  constructor(root) {
    super(root, PostsApi);
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