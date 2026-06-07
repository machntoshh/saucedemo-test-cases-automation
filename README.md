# saucedemo-test-cases-automation

End-to-end test suite for [SauceDemo](https://www.saucedemo.com) built with Cypress and the Page Object Model pattern.

![Cypress](https://img.shields.io/badge/Cypress-E2E-green) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![POM](https://img.shields.io/badge/Pattern-Page%20Object%20Model-blue)

---

## Overview

This project validates the core user flows of the SauceDemo e-commerce training app. Tests are organized using POM, separating page selectors and actions from test logic for maintainability and reuse.
<br>
<br>
Here are the [Test Cases](https://docs.google.com/spreadsheets/d/1UMnWvAOF2OpzOOz5nHlrzELAmiH5MqsEfbfydubofSo/edit?usp=sharing) for better visualization

---

## Project Structure

```
cypress-saucedemo-pom/
├── cypress/
│   ├── e2e/
│   │   └── testcases.cy.js
│   ├── fixtures/
│   ├── pages/
│   │   ├── cartPage.js
│   │   ├── homePage.js
│   │   └── loginPage.js
│   └── support/
├── node_modules/
├── cypress.config.js
├── package.json
└── yarn.lock
```
---

## Page Objects

### `loginPage.js`
Handles navigation, credential input, and login/logout flows.

**Methods:** `visit()`, `login()`, `loginLogout()`, `fillCredentials()`

---

### `homePage.js`
Controls inventory interactions, sorting, cart actions, and navigation menu.

**Methods:** `addToCart()`, `addAllToCart()`, `removeItem()`, `testAllSortOptions()`, `hamburgerAboutTest()`, `hamburgerLogoutTest()`, `enterCartPage()`

---

### `cartPage.js`
Manages the checkout flow and validates form field input constraints.

**Methods:** `checkoutCredentials()`, `fillCheckoutCredentials()`

---

## Test Cases

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1 | User with valid credentials can enter the home page | Iterates through all valid SauceDemo users (`standard`, `problem`, `performance_glitch`, `error`, `visual`), logging in and out with each to confirm session handling. | Passed | 
| 2 | User can change pages in the website | Opens the sidebar, visits the About page, navigates back, then exercises the logout link from the same menu. | Passed |
| 3 | User enters an invalid password on the login page | Submits a correct username with a wrong password and asserts the error banner appears with the expected message. | Passed |
| 4 | User can add items to the cart | Clicks every "Add to cart" button on the inventory page, then navigates to the cart to verify the items are present. | Passed |
| 5 | User can remove items from the cart | Adds one item, enters the cart, and removes it using the item-specific remove button. | Passed |
| 6 | User can filter the items | Cycles through all four sort options — A→Z, Z→A, price low→high, price high→low — to confirm the dropdown is functional. | Passed |
| 7 | User can checkout the items | Adds an item, proceeds to checkout, and submits intentionally invalid credentials to exercise the client-side field validation logic in `fillCheckoutCredentials()`. | Failed |

---

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Install

```bash
git clone https://github.com/machntoshh/saucedemo-test-cases-automation
cd saucedemo-test-cases-automation
npm install
```

### Run Tests

```bash
# Open Cypress UI (interactive)
npx cypress open

# Run headless (CI)
npx cypress run
```

---

## Checkout Validation Rules

The `fillCheckoutCredentials()` method enforces these constraints before submitting:

| Field | Min Length | Pattern |
|-------|-----------|---------|
| `firstName` | 3 | `/^[a-zA-Z0-9_]+$/` |
| `lastName` | 3 | `/^[a-zA-Z0-9_]+$/` |
| `postalCode` | 5–8 | `/^[0-9]+$/` |

> **Note:** The checkout test in `testcases.cy.js` deliberately passes invalid values (`'a'`, `'a'`, `'@'`) to trigger these validation assertions. This is intentional — the test is designed to verify that the validation logic correctly *rejects* bad input.

---

## Tech Stack

- **Cypress** — test runner and assertion library
- **JavaScript (ES6+)** — test language
- **Page Object Model** — selector and action encapsulation
