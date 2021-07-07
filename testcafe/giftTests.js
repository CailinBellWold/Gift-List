// https://www.npmjs.com/package/testcafe#getting-started

import { Selector } from 'testcafe';

const BASE_URL = 'http://localhost:3001/';
const LOGIN_PATH_NAME = '/login';
const LOGIN_URL = `${BASE_URL}login`;
const USER_LANDING_URL = `${BASE_URL}userlanding`;
const NEW_GIFT_URL = `${BASE_URL}newGift`;

const btnSignIn = Selector('a').withExactText('Sign In');
const btnSignUp = Selector('a').withExactText('Sign Up');
const btnSignOut = Selector('a').withExactText('Sign Out');

const txtLoginEmail = Selector('input#email-login');
const txtLoginPassword = Selector('input#password-login');
const btnSubmitSignIn = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign In');

const sectionGiftList = Selector('section').withAttribute('class', 'gift-list');
const sectionAddGift = Selector('section#btn-add-gift');
const btnAddGift = sectionAddGift.find('button').withText('Add Gift');
const btnsDeleteGifts = sectionGiftList.find('button#deleteBtn');

const txtGiftRecipientName = Selector('input#newgiftGiftee');
const txtGiftDescription = Selector('input#newgiftDescription');
const btnSaveGift = Selector('button#giftSave');

fixture `Login Tests`
  .page(BASE_URL);

test('victor@smith.com adds a gift, but then deletes it', async t => {
  let url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);
  await t.click(btnSignIn);

  /*
  const firstWindow = await t.getCurrentWindow();
  // Clicking "Sign In" opens a new window to the Login Path.
  // https://testcafe.io/402900/resources/blog/2020-8-26-introducing-multi-window-tests-beta
  await t.switchToWindow(({url}) => url.pathname === LOGIN_PATH_NAME);
  */
  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(LOGIN_URL);
  // Resize the new window so we can actually see that we are logged in ...
  // await t.resizeWindow(1000, 700);
  await t.typeText(txtLoginEmail, 'victor@smith.com');
  await t.typeText(txtLoginPassword, 'password1');
  await t.click(btnSubmitSignIn);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(USER_LANDING_URL);
  await t.expect(sectionGiftList.textContent).notContains('Uncle Lou');
  await t.expect(sectionGiftList.textContent).notContains('Purple Tie');
  await t.click(btnAddGift);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(NEW_GIFT_URL);

  await t.typeText(txtGiftRecipientName, 'Uncle Lou');
  await t.typeText(txtGiftDescription, 'Purple Tie');
  await t.click(btnSaveGift);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(USER_LANDING_URL);

  await t.expect(sectionGiftList.textContent).contains('Uncle Lou');
  await t.expect(sectionGiftList.textContent).contains('Purple Tie');

  // Reload the page to make sure the Purple Tie is still there!
  // https://stackoverflow.com/questions/56157048/testcafe-how-to-reload-actual-page
  await t.eval(() => location.reload(true));
  await t.expect(sectionGiftList.textContent).contains('Uncle Lou');
  await t.expect(sectionGiftList.textContent).contains('Purple Tie');

  // Assume the last row is the Purple Tie for Uncle Lou we just added ...
  await t.click(btnsDeleteGifts.nth(-1));
  await t.expect(sectionGiftList.textContent).notContains('Uncle Lou');
  await t.expect(sectionGiftList.textContent).notContains('Purple Tie');

  // Reload the page to make sure the Purple Tie is really gone!
  await t.eval(() => location.reload(true));
  await t.expect(sectionGiftList.textContent).notContains('Uncle Lou');
  await t.expect(sectionGiftList.textContent).notContains('Purple Tie');
});