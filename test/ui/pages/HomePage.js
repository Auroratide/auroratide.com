import Page from './Page';
import Links from '../../../src/client/config/links';

export default class HomePage extends Page {
  constructor(testController) {
    super(testController, Links.Auroratide.HOME);
  }

  static async start(testController) {
    const page = new HomePage(testController);
    await page.navigate();
    return page;
  }
}