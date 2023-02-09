/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")

describe("Login Form Tests", () => {
  before("Visit App and click the Login link", () => {
    cy.visit("/login");
  })

  it("Try to Log in with a valid Password, without an Email address", () => {
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElement.passwordInput).type("Malimrav123");
    cy.get(locators.commonFormElement.submitButton).click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with a valid Email address, without an Password", () => {
    cy.visit("/login");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElement.mailInput).type("madeinzvornik@gmail.com");
    cy.get(locators.commonFormElement.submitButton).click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in without any Credentials", () => {
    cy.visit("/login");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElement.submitButton).click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with a valid Email address, but the wrong Password", () => {
    cy.visit("/login");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElement.mailInput).type("madeinzvornik@gmail.com")
    cy.get(locators.commonFormElement.passwordInput).type("NekaDrugaSifra");
    cy.get(locators.commonFormElement.submitButton).click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with non-registered User's Email address", () => {
    cy.visit("/login");
    cy.get(locators.navbar.loginButton).click();
    cy.get(locators.commonFormElement.mailInput).type("nekidrugi@gmail.com")
    cy.get(locators.commonFormElement.passwordInput).type("Malimrav123");
    cy.get(locators.commonFormElement.submitButton).click();
    cy.url().should("contain", "/login");
  })
})
