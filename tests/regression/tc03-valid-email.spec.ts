import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Regression - Login validation", () => {
  test("TC_03 - Login accepts valid email format", async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.fillCredentials("test@example.com", "12345");


    await expect(login.emailInput).toHaveJSProperty("validity.valid", true);

    await expect(page).toHaveURL(/\/login/);
  });
});
