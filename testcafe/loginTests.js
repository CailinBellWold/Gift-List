// https://www.npmjs.com/package/testcafe#getting-started

import { Selector } from 'testcafe';

const BASE_URL = 'http://localhost:3001/';
const LOGIN_PATH_NAME = '/login';

const btnSignIn = Selector('a').withExactText('Sign In');
const txtLoginEmail = Selector('input#email-login');
const txtPassword = Selector('input#password-login');
const btnSubmitSignIn = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign In');

const sectionAddGift = Selector('section#btn-add-gift');

fixture `Login Tests`
  .page(BASE_URL);

test('Login as karen@small.com', async t => {
  const url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);
  await t.click(btnSignIn);
  // https://testcafe.io/402900/resources/blog/2020-8-26-introducing-multi-window-tests-beta
  await t.switchToWindow(({url}) => url.pathname === LOGIN_PATH_NAME);
  await t.typeText(txtLoginEmail, 'karen@small.com');
  await t.typeText(txtPassword, '1password');
  https://stackoverflow.com/questions/47359687/testcafe-how-to-check-if-a-web-element-exists-or-does-not-exist-without-failin
  await t.expect(sectionAddGift.exists).notOk();
  await t.click(btnSubmitSignIn);
  // Wait 3 seconds to actually see the page ...
  await t.wait(3000);
  await t.expect(sectionAddGift.exists).ok();
});