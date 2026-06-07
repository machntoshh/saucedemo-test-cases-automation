import homePage from "./homePage"
import loginPage from "./loginPage"

class cartPage {
    get cartButton() {
        return cy.get('[data-test="shopping-cart-link"]')
    }

    get checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }

    get firstNameText() {
        return cy.get('[data-test="firstName"]')
    }

    get lastNameText() {
        return cy.get('[data-test="lastName"]')
    }

    get postalCodeText() {
        return cy.get('[data-test="postalCode"]') 
    }

    get continueButton() {
        return cy.get('[data-test="continue"]')
    }

    fillCheckoutCredentials(firstName, lastName, postalCode) {
        this.firstNameText.type(firstName).invoke('val').then((value) => {
            expect(value.length).to.be.at.least(3)
            expect(value).to.match(/^[a-zA-Z0-9_]+$/)
            })
        this.lastNameText.type(lastName).invoke('val').then((value) => {
            expect(value.length).to.be.at.least(3)
            expect(value).to.match(/^[a-zA-Z0-9_]+$/)
            })
        this.postalCodeText.type(postalCode).invoke('val').then((value) => {
            expect(value.length).to.be.within(5, 8)
            expect(value).to.match(/^[0-9]+$/)
            })
    }

    checkoutCredentials(firstName, lastName, postalCode) {
        homePage.enterCartPage()
        this.checkoutButton.click()
        this.fillCheckoutCredentials(firstName, lastName, postalCode)
        this.continueButton.click()

    }
}

export default new cartPage()