import * as Api from 'Client/api/projects';
import ResourceStore from './resource-store';

export default class PostsStore extends ResourceStore {
  constructor(root) {
    super(root, Api);
  }
}