import { Page, Locator, expect } from '@playwright/test';
export class AddtoCartPage{
    readonly page: Page;
    readonly products: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartButton: Locator;  
    readonly cartCount: Locator;
    readonly continueShoppingButton: Locator;
    readonly proceedButton: Locator;
    readonly placeOrderButton: Locator;
    readonly NameInputForPayment: Locator;
    readonly cardNumberInput: Locator;
    readonly expiryDateInput: Locator;
    readonly cvcInput: Locator; 
    readonly yearInput: Locator;
    readonly payAndConfirmOrderButton: Locator;
    readonly OrderConfirmationMessage: Locator;

constructor(page: Page) {
    this.page = page;
    this.products = page.locator('.productinfo.text-center');
    this.addToCartButton = page.locator('.btn.btn-default.add-to-cart');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
    this.cartCount = page.locator('.cart_quantity');
    this.proceedButton = page.locator('.btn.btn-default.check_out');
    this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
    this.NameInputForPayment = page.locator('[data-qa="name-on-card"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryDateInput = page.locator('[data-qa="expiry-month"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.yearInput = page.locator('[data-qa="expiry-year"]');
    this.payAndConfirmOrderButton = page.locator('[data-qa="pay-button"]');
    this.OrderConfirmationMessage = page.getByText('Congratulations! Your order has been confirmed!')
}
async addTocartAndCheckout() {

    const count = await this.products.count();
    const randomIndex = Math.floor(Math.random() * count);
    const product = this.products.nth(randomIndex);
    await product.hover();
    //await this.addToCartButton.nth(randomIndex).click();
    await product.locator('.add-to-cart').click();
    await this.viewCartButton.click();
    await expect(this.page).toHaveURL(/view_cart/);
    await this.proceedButton.click();
    await expect(this.page).toHaveURL(/checkout/);
    await this.placeOrderButton.click();
    await this.NameInputForPayment.fill('Cratd User');
    await this.cardNumberInput.fill('4242424242424242');
     await this.cvcInput.fill('123');
    await this.expiryDateInput.fill('12');
    await this.yearInput.fill('2027');
    await this.payAndConfirmOrderButton.click();
    await expect(this.OrderConfirmationMessage).toBeVisible();
   

  }




}