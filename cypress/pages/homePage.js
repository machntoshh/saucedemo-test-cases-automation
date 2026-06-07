import loginPage from "./loginPage"
import cartPage from "./cartPage"

class homePage {
    get hamburgerAbout() {
        return cy.get('#about_sidebar_link')
    }

    get hamburgerButton() {
        return cy.get('#react-burger-menu-btn')
    }

    get logoutButton() {
        return cy.get('[data-test="logout-sidebar-link"]')
    }

    get addCartButton() {
        return cy.get('[data-test^="add-to-cart"]')
    }

    get removeCartButton() {
        return cy.get('[data-test^="remove-sauce-labs-backpack"]')
    }

    get dropdownButton() {
        return cy.get('[data-test="product-sort-container"]')
    }


    hamburgerAboutTest() {
        this.hamburgerButton.click()
        this.hamburgerAbout
            .should('be.visible')  
            .click()
        cy.go('back')
    }

    hamburgerLogoutTest() {
        loginPage.visit()
        this.hamburgerButton.click()
        this.logoutButton
            .should('be.visible')  
            .click()
    }

    dropdownSortButton() {
        this.dropdownButton.click()
    }

    testAllSortOptions() {
        this.dropdownButton.select('az')  
        this.dropdownButton.select('za')   
        this.dropdownButton.select('lohi') 
        this.dropdownButton.select('hilo')
    }

    enterCartPage() {
        cartPage.cartButton.click()
    }

    addToCart() {
        this.addCartButton.eq(0).click()
    }

    addAllToCart() {
        this.addCartButton.each(($btn) => {
            cy.wrap($btn).click()
        })
    }

    removeItem() {
        this.removeCartButton.eq(0).click()
    }

    removeAllItems() {
        this.removeCartButton.each(($btn) => {
            cy.wrap($btn).click()
        })
    }
}

export default new homePage()