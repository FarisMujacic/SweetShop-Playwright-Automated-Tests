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

## Technologies Used

- **Visual Studio Code** (IDE)
- **Node.js** and **npm**
- **Playwright**
- **TypeScript**

---

## Installation and Setup

It is recommended to open the project directly in **Visual Studio Code** so that the terminal path is set automatically.

1. Install project dependencies:
   ```bash
   npm install
