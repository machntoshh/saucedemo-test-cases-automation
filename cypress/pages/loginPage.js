import homePage from "./homePage"
import cartPage from "./cartPage"


class loginPage {
    get usernameInput() {
        return cy.get('[data-test="username"]')
    }

    get passwordInput() {
        return cy.get('[data-test="password"]')
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]')
    }

    get errorMessage() {
        return cy.get('[data-test="error"]').contains("Epic sadface: You can only access '/inventory.html' when you are logged in.")
    }


    visit() {
    cy.visit('https://www.saucedemo.com/')
    }

    fillCredentials(username, password) {
        this.usernameInput.type(username)
        this.passwordInput.type(password)
    }

    login(username, password) {
        this.fillCredentials(username, password)
        this.loginButton.click()
    }

    loginLogout(username, password) {
        this.fillCredentials(username, password)
        this.loginButton.click()
        homePage.hamburgerButton.click()
        homePage.logoutButton.click()
    }
}

export default new loginPage()