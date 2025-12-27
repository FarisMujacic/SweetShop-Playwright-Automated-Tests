import { test, expect } from "@playwright/test";
import { SweetsPage } from "../../pages/SweetsPage";

test.describe("Smoke - Basket", () => {
  test("TC_01 - Add single product to basket", async ({ page }) => {
    const sweets = new SweetsPage(page);

    await sweets.open();
    await expect(page.locator("text=Add to Basket").first()).toBeVisible();

    await sweets.addFirstProductToBasket();
    await sweets.openBasket();

    await expect(page).toHaveURL(/\/basket/i);
    await expect(page.locator("text=Total (GBP)")).toBeVisible();
    await expect(page.locator("text=Total (GBP)").locator("..").locator("text=/£(?!0\\.00)/").first()).toBeVisible();

  });
});
