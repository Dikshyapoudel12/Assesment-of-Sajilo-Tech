import { expect, test as setup } from '@playwright/test';
import { createUserData } from '../../test-data/userData';
import { HomePage } from '../../pages/HomePage';

const authFile = 'playwright/.auth/user.json';

setup('Signup once and save logged-in session', async ({ page }) => {

  const user = createUserData();
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  await homePage.clickSignupLogin();
  await homePage.signup(user);
  await expect(homePage.loggedInUserText).toBeVisible();

  // Save authentication state for dependent projects/tests.
  await page.context().storageState({ path: authFile });

});