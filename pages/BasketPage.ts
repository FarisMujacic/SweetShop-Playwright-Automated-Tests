import { Page, Locator, expect } from "@playwright/test";

export class BasketPage {
  readonly page: Page;
  readonly emptyBasketLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emptyBasketLink = page.getByRole("link", { name: "Empty Basket" })
      .or(page.getByRole("button", { name: "Empty Basket" }))
      .or(page.locator("text=Empty Basket"));
  }

  async emptyBasket(): Promise<void> {
    await this.emptyBasketLink.click();
  }

  totalValue(): Locator {
    return this.page.getByText("Total (GBP)").locator("..").locator("strong");
  }

  removeButtons(): Locator {
    return this.page.getByRole("button", { name: /remove/i });
  }

  async expectBasketEmpty(): Promise<void> {
    await expect(this.removeButtons()).toHaveCount(0);
  }
}
