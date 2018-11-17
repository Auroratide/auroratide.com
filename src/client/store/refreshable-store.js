import { observable } from 'mobx';

export default class RefreshableStore {
  @observable isRefreshing = false;

  async withRefresh(action) {
    this.isRefreshing = true;

    const result = await action().catch(err => {
      this.isRefreshing = false;
      throw err;
    });

    this.isRefreshing = false;
    return result;
  }
}