/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")

describe("Register Form Tests", () => {
    let userData = {
      firstName: "Aleksandar",
      lastName: "Pantic",
      email: "test@mail.com",
      password: "test1234",
      shortPassword: "test",
      passwordWithoutNumber: "testtest",
      mailWithoutDot: "test@mailcom",
      mailWithoutSign: "testmail.com"
      } 
    beforeEach("Visit App and click on Register link", () => {
      cy.visit("/register");
      cy.get(locators.navbar.registerButton).click();
      cy.url().should("contain", "/register");
    })

    it("Try to Register without a First Name", () => {
      cy.get(locators.register.lastName).type(userData.lastName);
      cy.get(locators.commonFormElement.mailInput).type(userData.email);
      cy.get(locators.commonFormElement.passwordInput).type(userData.password);
      cy.get(locators.register.passwordConfirmation).type(userData.password);
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Last Name", () => {
      cy.get(locators.register.firstName).type(userData.firstName);
      cy.get(locators.commonFormElement.mailInput).type(userData.email);
      cy.get(locators.commonFormElement.passwordInput).type(userData.password);
      cy.get(locators.register.passwordConfirmation).type(userData.password);
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Email address", () => {
      cy.get(locators.register.firstName).type(userData.firstName);
      cy.get(locators.register.lastName).type(userData.lastName)
      cy.get(locators.commonFormElement.passwordInput).type(userData.password);
      cy.get(locators.register.passwordConfirmation).type(userData.password);
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a dot in the Email address", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmailcom");
      cy.get(locators.commonFormElement.passwordInput).type("test1234");
      cy.get(locators.register.passwordConfirmation).type("test1234");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a '@ sign' in the Email address", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("testgmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("test1234");
      cy.get(locators.register.passwordConfirmation).type("test1234");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Password", () => {
      cy.visit("/register");
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Password confirmation", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("test1234");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a wrong Confirmed Password", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("test1234");
      cy.get(locators.register.passwordConfirmation).type("test12345");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a Password less than 8 characters", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("test");
      cy.get(locators.register.passwordConfirmation).type("test");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a Password without number", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("testtest");
      cy.get(locators.register.passwordConfirmation).type("testtest");
      cy.get(locators.register.checkBox).check();
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without check the 'Accepted terms and conditions'", () => {
      cy.get(locators.register.firstName).type("Test");
      cy.get(locators.register.lastName).type("Test");
      cy.get(locators.commonFormElement.mailInput).type("test@gmail.com");
      cy.get(locators.commonFormElement.passwordInput).type("test1234");
      cy.get(locators.register.passwordConfirmation).type("test1234");
      cy.get(locators.commonFormElement.submitButton).click();
      cy.url().should("contain", "/register");
    })
  })
  