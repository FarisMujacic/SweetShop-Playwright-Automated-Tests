import { test, expect } from "@playwright/test";
import { SweetsPage } from "../../pages/SweetsPage";
import { BasketPage } from "../../pages/BasketPage";

test.describe("Regression - Basket", () => {
  test("TC_06 - Empty Basket clears all items", async ({ page }) => {
    const sweets = new SweetsPage(page);
    const basket = new BasketPage(page);

    await sweets.open();
    await sweets.addFirstProductToBasket();
    await sweets.openBasket();

    const totalBefore = basket.totalValue();
    await expect(totalBefore).toBeVisible();
    await expect(totalBefore).not.toHaveText(/£0\.00/);

    await basket.emptyBasket();

    await basket.expectBasketEmpty();

    
    const totalAfter = basket.totalValue();
    await expect(totalAfter).toBeVisible();
  });
});
