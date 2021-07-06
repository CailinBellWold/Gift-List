// https://www.npmjs.com/package/testcafe#getting-started

import { Selector } from 'testcafe';

const BASE_URL = 'http://localhost:3001/';
const LOGIN_PATH_NAME = '/login';
const LOGIN_URL = `${BASE_URL}login`;

const btnSignIn = Selector('a').withExactText('Sign In');
const btnSignUp = Selector('a').withExactText('Sign Up');
const btnSignOut = Selector('a').withExactText('Sign Out');

const txtSignupEmail = Selector('input#email-signup');
const txtPassword = Selector('input#password-signup');
const btnSubmitSignUp = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign Up');

const sectionAddGift = Selector('section#btn-add-gift');

fixture `Sign-Up Tests`
  .page(BASE_URL);

// TODO: This has a problem when run a second time, trying to create a second donald@smith.com ...
test('Sign up as donald@smith.com', async t => {
  let url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);

  // https://stackoverflow.com/questions/47359687/testcafe-how-to-check-if-a-web-element-exists-or-does-not-exist-without-failin
  await t.expect(btnSignIn.exists).ok();
  await t.expect(btnSignUp.exists).ok();
  await t.expect(btnSignOut.exists).notOk();
  await t.click(btnSignUp);

  const firstWindow = await t.getCurrentWindow();
  // Clicking "Sign In" opens a new window to the Login Path.
  // https://testcafe.io/402900/resources/blog/2020-8-26-introducing-multi-window-tests-beta
  await t.switchToWindow(({url}) => url.pathname === LOGIN_PATH_NAME);
  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(LOGIN_URL);
  // Resize the new window so we can actually see that we are logged in ...
  await t.resizeWindow(1000, 700);
  await t.typeText(txtSignupEmail, 'donald@smith.com');
  await t.typeText(txtPassword, 'password22');
  // The Add Gift section should not be showing yet ...
  await t.expect(sectionAddGift.exists).notOk();
  await t.click(btnSubmitSignUp);
  // Now the Add Gift section should be showing ...
  await t.expect(sectionAddGift.exists).ok();

  await t.expect(btnSignIn.exists).notOk();
  await t.expect(btnSignUp.exists).notOk();
  await t.expect(btnSignOut.exists).ok();
});