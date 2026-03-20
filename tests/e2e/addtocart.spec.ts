import { test } from '@playwright/test';
import { AddtoCartPage } from '../../pages/AddtoCartPage';

test('Add product to cart (already logged in)', async ({ page }) => {
  const addtoCartPage = new AddtoCartPage(page);

  await addtoCartPage.addTocartAndCheckout();

});