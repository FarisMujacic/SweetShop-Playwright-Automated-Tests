import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Regression - Login validation", () => {
  test("TC_04 - Login blocks invalid email (missing @)", async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.attemptLogin("testexample.com", "12345");

    
    await expect(login.emailInput).toHaveJSProperty("validity.valid", false);

   
    await expect(page).toHaveURL(/\/login/);

  });
});
