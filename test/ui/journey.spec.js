import HomePage from './pages/HomePage';

fixture('User Journey UI Tests');

test('The user navigates the website', async t => {
  let page = await HomePage.start(t);
  page = await page.clickWhatAmIUpTo();

  await page.assertHasDigests();
});