import { Selector } from 'testcafe';
import Page from './Page';
import Links from '../../../src/client/config/links';

export default class DigestsPage extends Page {
  constructor(testController) {
    super(testController, Links.Auroratide.DIGESTS);

    this.digestItem = Selector('article');
  }

  async assertHasDigests() {
    await this.t.expect(this.digestItem.count).gt(0);
  }
}