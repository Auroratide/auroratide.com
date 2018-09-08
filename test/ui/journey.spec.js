import HomePage from './pages/HomePage';

fixture('User Journey UI Tests');

test('The user navigates the website', async t => {
  await HomePage.start(t);
});