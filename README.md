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

 

### Visual Studio - IDE 
To install Visual Studio use following [website](https://visualstudio.microsoft.com/)

 

### Node.js and node package manager (npm)
To install Node.js use following [website](https://nodejs.org/en/)
To install node package manager, in project terminal write:
```bash
npm install
```


### Playwright 
To install Playwright use the following npm command in project terminal
```bash
npm install playwright@latest
```
alternatively you may use the VSCode extension: [website](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)


 

## How to run tests 
It is advisable to open project directly in Visual studio, therefore in terminal cd path will be automatically set up. 
### All tests 
If one wants to run entire test suite, it can be done by following command:
```bash
npx playwright test 
```
### Test suites
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
Example for featured-item.js:
```bash
npx playwright test featured-item.test.js
```
Note: some tests need to run in headed mode in order to test the site properly. If a test fails try adding --headed to the command, like this:
```bash
npx playwright test featured-item.test.js --headed
```
