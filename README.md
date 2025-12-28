# SweetShop – Playwright Automated Testing

Automated UI tests created for the **Software Testing and Maintenance** course.

This repository contains automated **smoke** and **regression** test suites implemented using **Playwright** for the SweetShop demo e-commerce website. The project demonstrates end-to-end testing of core e-commerce functionalities such as login validation and basket management.

---

## Application Under Test

**SweetShop** – demo e-commerce website used for testing purposes.

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

All tests are implemented using the **Page Object Model (POM)** design pattern to ensure maintainability and readability.

---

## Technologies

### Visual Studio Code (IDE)
Install VS Code from the official website:  
- https://code.visualstudio.com/

### Node.js and npm
Install Node.js (npm is included with Node.js):  
- https://nodejs.org/en/

Install project dependencies inside the project folder:
```bash
npm install
```


### Playwright 
To install Playwright use the following npm command in project terminal
```bash
npm init playwright@latest
```
alternatively you may use the VSCode extension: [website](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)




## How to Run Tests

It is recommended to open the project directly in **Visual Studio Code**, so the terminal opens in the correct project directory.

### All tests
Run the entire test suite:
```bash
npx playwright test

```
### Test suites (run a folder)
If one wants to run a specific set of tests , it can be done by the following command:
```bash
npx playwright test tests/<directory-name>/
```
Most tests will fail this way, because of the slow and buggy nature of the website. It is advisable to run tests individually.
### Single test 
If one wants to run single test, it can be done by following command:
```bash
npx playwright test <filename> 
```
Example:
```bash
npx playwright test tests/regression/tc06-empty-basket.spec.ts
```
Some tests may be easier to debug or more stable in headed mode. If a test fails, try adding --headed:
```bash
npx playwright test tests/regression/tc06-empty-basket.spec.ts --headed
```
