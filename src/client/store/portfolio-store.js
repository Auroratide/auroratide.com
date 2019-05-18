import * as Api from 'Client/api/portfolio';
import ResourceStore from './resource-store';

export default class ProjectsStore extends ResourceStore {
  constructor(root) {
    super(root, Api);
  }
}