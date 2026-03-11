// import { test, expect } from '@playwright/test';
// import { HomePage } from '../pages/HomePage';
// import { createUserData } from '../test-data/userData';

// test('Signup, logout, login and save session', async ({ page }) => {
//   const homepage = new HomePage(page);
//   await homepage.gotoHomePage();
//   const user = createUserData();
//   await homepage.clickSignupLogin();
//   await homepage.signup(user); 
//   await homepage.clickSignupLogin();
//   await homepage.login(user);
//   await expect(homepage.loggedInUserText).toHaveText(`Logged in as ${user.name}`);
//   await page.context().storageState({ path: 'storageState.json' });
// });