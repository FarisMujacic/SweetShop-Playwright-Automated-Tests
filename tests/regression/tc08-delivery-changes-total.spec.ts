import { test, expect } from "@playwright/test";
import { SweetsPage } from "../../pages/SweetsPage";

test.describe("Regression - Delivery", () => {
  test("TC_08 - Standard Shipping changes total", async ({ page }) => {
    const sweets = new SweetsPage(page);

    await sweets.open();
    await sweets.addFirstProductToBasket();
    await sweets.openBasket();

    const totalCard = page.locator("text=Total (GBP)").locator("..");
    await expect(totalCard).toBeVisible();

    const before = (await totalCard.textContent()) ?? "";

    await page.locator("text=Standard Shipping").click();

    const after = (await totalCard.textContent()) ?? "";

    expect(after).not.toEqual(before);
  });
});
