import { Selector } from 'testcafe';
import Page from './Page';
import DigestsPage from './DigestsPage';
import Links from '../../../src/client/config/links';

export default class HomePage extends Page {
  constructor(testController) {
    super(testController, Links.Auroratide.HOME);

    this.whatAmIUpToLink = Selector('a').withText('What am I up to');
  }

  async clickWhatAmIUpTo() {
    await this.t.click(this.whatAmIUpToLink);
    return new DigestsPage(this.t);
  }

  static async start(testController) {
    const page = new HomePage(testController);
    await page.navigate();
    return page;
  }
}