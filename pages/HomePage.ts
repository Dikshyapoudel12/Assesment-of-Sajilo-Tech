import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly genderRadioButton: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressOneInput: Locator;
  readonly addressTwoInput: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly successMessage: Locator;
  readonly continueButton: Locator;
  readonly logoutselector: Locator;
  readonly loggedInUserText: Locator;
  


  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.loginEmailInput = page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.genderRadioButton = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.addressOneInput = page.locator('#address1');
    this.addressTwoInput = page.locator('#address2');
    this.countrySelect = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.successMessage = page.getByRole('heading', { name: 'Account Created' });
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.logoutselector = page.getByRole('link', { name: 'Logout' });
    this.loggedInUserText = page.locator('a:has-text("Logged in as") b');

  }
  async gotoHomePage() {
    await this.page.goto('/');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

async signup(user: any) {

  await this.signupNameInput.fill(user.name);
  await this.signupEmailInput.fill(user.email);
  await this.signupButton.click();
  await this.genderRadioButton.check();
  await this.passwordInput.fill(user.password);
  await this.firstNameInput.fill(user.firstName);
  await this.lastNameInput.fill(user.lastName);
  await this.addressOneInput.fill(user.address1);
  await this.addressTwoInput.fill(user.address2);
  await this.countrySelect.selectOption('United States');
  await this.stateInput.fill(user.state);
  await this.cityInput.fill(user.city);
  await this.zipcodeInput.fill(user.zipcode);
  await this.mobileNumberInput.fill(user.mobile);
  await this.createAccountButton.click();
  await expect(this.successMessage).toBeVisible();
  await expect(this.continueButton).toBeVisible();
  await this.continueButton.click();
  //await expect(this.loggedInUserText).toHaveText(`Logged in as ${user.name}`);
  //await this.logoutselector.click();

}

async login(user: any) {
    await this.gotoHomePage();
    await this.clickSignupLogin();
    await this.loginEmailInput.fill(user.email);
    await this.loginPasswordInput.fill(user.password);
    await this.loginButton.click();
  }



}