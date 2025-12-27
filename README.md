# SweetShop – Playwright Automated Testing

Automated UI tests created for the **Software Testing and Maintenance** course.

This repository contains automated **smoke and regression test suites** implemented using **Playwright** for the SweetShop demo e-commerce website. The project demonstrates end-to-end testing of core e-commerce functionalities such as login validation and basket management.

---

## Application Under Test

**SweetShop** – Demo e-commerce website used for testing purposes.

Main functionalities covered:
- Login email validation
- Product browsing
- Adding products to basket
- Emptying basket
- Delivery option price changes

---

## Test Automation Scope

### Smoke Tests
- **TC_01** – Add single product to basket

### Regression Tests
- **TC_03** – Login accepts valid email format
- **TC_04** – Login blocks invalid email format
- **TC_06** – Empty basket clears all items
- **TC_08** – Delivery option changes total price

All tests are implemented using the **Page Object Model (POM)** design pattern for better maintainability and readability.

---

## Technologies Used

- **Visual Studio Code** – IDE  
  https://code.visualstudio.com/
- **Node.js & npm**  
  https://nodejs.org/
- **Playwright**  
  https://playwright.dev/
- **TypeScript**

---

## Installation and Setup

It is recommended to open the project directly in **Visual Studio Code**, so the terminal path is set automatically.

### Install project dependencies
```bash
npm install
Install Playwright browsers
bash
Copy code
npx playwright install
Running Tests
Run all tests (smoke + regression on all browsers)
bash
Copy code
npx playwright test
Run tests only in Chromium
bash
Copy code
npx playwright test --project=chromium
Run tests in headed mode (visible browser)
bash
Copy code
npx playwright test --project=chromium --headed
Run all regression tests
bash
Copy code
npx playwright test tests/regression/
Run a single test file
bash
Copy code
npx playwright test tests/regression/tc06-empty-basket.spec.ts
If a test fails due to UI timing issues, try running it in headed mode:

bash
Copy code
npx playwright test tests/regression/tc06-empty-basket.spec.ts --headed
Test Reports
After running tests, open the HTML report using:

bash
Copy code
npx playwright show-report
The report contains:

Test execution results

Step-by-step logs

Failure details

Notes
Each test runs in an isolated browser context

No test depends on the state of another test

Assertions handle dynamic UI behavior

Tests are written for clarity, stability, and maintainability

Author
Faris Mujacic
