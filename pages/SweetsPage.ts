import { Page, Locator } from "@playwright/test";

export class SweetsPage {
  readonly page: Page;
  readonly addToBasketButtons: Locator;
  readonly basketLink: Locator;

  constructor(page: Page) {
    this.page = page;


    this.addToBasketButtons = page.locator("text=Add to Basket");

    this.basketLink = page.locator("text=Basket");
  }

  async open(): Promise<void> {
    await this.page.goto("https://sweetshop.netlify.app/sweets");
  }

  async addFirstProductToBasket(): Promise<void> {
    await this.addToBasketButtons.first().click();
  }

  async openBasket(): Promise<void> {
    await this.basketLink.first().click();
  }
}
