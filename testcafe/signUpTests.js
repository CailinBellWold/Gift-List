// https://www.npmjs.com/package/testcafe#getting-started

import { Selector } from 'testcafe';

const BASE_URL = 'http://localhost:3001/';
const LOGIN_PATH_NAME = '/login';
const LOGIN_URL = `${BASE_URL}login`;
const USER_LANDING_URL = `${BASE_URL}userlanding`;

const btnSignIn = Selector('a').withExactText('Sign In');
const btnSignUp = Selector('a').withExactText('Sign Up');
const btnSignOut = Selector('a').withExactText('Sign Out');

const txtSignupEmail = Selector('input#email-signup');
const txtSignupPassword = Selector('input#password-signup');
const btnSubmitSignUp = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign Up');

const txtLoginEmail = Selector('input#email-login');
const txtLoginPassword = Selector('input#password-login');
const btnSubmitSignIn = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign In');

const sectionAddGift = Selector('section#btn-add-gift');

fixture `Sign-Up Tests`
  .page(BASE_URL);

// This has a problem when run a second time, trying to create a second donald@smith.com
//   WORK-AROUND: Do this before running the test --> DELETE FROM user where email = 'donald@smith.com';
test('Sign up as donald@smith.com and then verify new login works for donald', async t => {
  let url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);

  // https://stackoverflow.com/questions/47359687/testcafe-how-to-check-if-a-web-element-exists-or-does-not-exist-without-failin
  await t.expect(btnSignIn.exists).ok();
  await t.expect(btnSignUp.exists).ok();
  await t.expect(btnSignOut.exists).notOk();
  await t.click(btnSignUp);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(LOGIN_URL);
  await t.typeText(txtSignupEmail, 'donald@smith.com');
  await t.typeText(txtSignupPassword, 'password22');
  // The Add Gift section should not be showing yet ...
  await t.expect(sectionAddGift.exists).notOk();
  await t.click(btnSubmitSignUp);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(USER_LANDING_URL);
  // Now the Add Gift section should be showing ...
  await t.expect(sectionAddGift.exists).ok();

  await t.expect(btnSignIn.exists).notOk();
  await t.expect(btnSignUp.exists).notOk();
  await t.expect(btnSignOut.exists).ok();

  await t.click(btnSignOut);
  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);

  // We should be able to log back in as donald@smith.com
  await t.click(btnSignIn);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(LOGIN_URL);

  await t.typeText(txtLoginEmail, 'donald@smith.com');
  await t.typeText(txtLoginPassword, 'password22');
  await t.click(btnSubmitSignIn);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(USER_LANDING_URL);
  await t.expect(sectionAddGift.exists).ok();
});