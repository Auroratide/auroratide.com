import { Selector } from 'testcafe';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export default class Page {
  constructor(testController, url) {
    this.t = testController;
    this.url = url;
  }

  async navigate() {
    await this.t.navigateTo(`${BASE_URL}${this.url}`);
    await this.t.expect(Selector('body').exists).ok();
  }
}