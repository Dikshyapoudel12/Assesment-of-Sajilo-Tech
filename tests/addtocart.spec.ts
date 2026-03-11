//Import your custom 'test' from your fixture file, not the default one!
import { test, expect } from '../fixtures/user.fixture'; 
import { HomePage } from '../pages/HomePage';
import { AddtoCartPage } from '../pages/AddtoCartPage';

test('User can successfully register with unique data and logout the session', async ({ page, user }) => {
  const homePage = new HomePage(page);

  await homePage.gotoHomePage();
  await homePage.clickSignupLogin();
  await homePage.signup(user);

});
// test('User can successfully login with valid credentials', async ({ page, user }) => {
//   const homePage = new HomePage(page);
//   await homePage.login(user);

// });

test('User can add a product to cart and proceed to checkout', async ({ page, user }) => {
  const homePage = new HomePage(page);
  const addtoCartPage = new AddtoCartPage(page);

await homePage.gotoHomePage();
await homePage.clickSignupLogin();
await homePage.signup(user);
await addtoCartPage.addTocartAndCheckout();
});



