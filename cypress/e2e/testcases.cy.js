import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import cartPage from "../pages/cartPage"

describe('SauceDemo automation', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('User with valid credentials can enter the home page', () => {
    loginPage.loginLogout(
      'standard_user',
      'secret_sauce'
    )
    loginPage.loginLogout(
      'problem_user',
      'secret_sauce'
    )
    loginPage.loginLogout(
      'performance_glitch_user',
      'secret_sauce'
    )
    loginPage.loginLogout(
      'error_user',
      'secret_sauce'
    )
    loginPage.loginLogout(
      'visual_user',
      'secret_sauce'
    )
  })
  
  it('User can change pages in the website', () => {
    cy.on('uncaught:exception', () => false)

    loginPage.login('standard_user','secret_sauce')
    homePage.hamburgerAboutTest()
    homePage.hamburgerLogoutTest()
  })

  it('User enters an invalid password on the login page', () => {
    loginPage.login('standard_user','wrong_password')
    cy.get('[data-test="error"]').should('be.visible').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('User can add items to the cart', () => {
    loginPage.login('standard_user','secret_sauce')
    homePage.addAllToCart()
    homePage.enterCartPage()
  })

  it('User can remove items from the cart', () => {
    loginPage.login('standard_user','secret_sauce')
    homePage.addToCart()
    homePage.enterCartPage()
    homePage.removeItem()
  })

  it('User can filter the items', () => {
    loginPage.login('standard_user','secret_sauce')
    homePage.testAllSortOptions()
  })

  it('User can checkout the items', () => {
    loginPage.login('standard_user','secret_sauce')
    homePage.addToCart()
    homePage.enterCartPage()
    cartPage.checkoutCredentials('a', 'a', '@')
  })
})