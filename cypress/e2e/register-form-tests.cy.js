/// <reference types="Cypress" />

describe("Register Form Tests", () => {
    it("Try to Register without a First Name", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Last Name", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Email address", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a dot in the Email address", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmailcom")
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a '@ sign' in the Email address", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("testgmail.com")
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Password", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without a Password confirmation", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test1234");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a wrong Confirmed Password", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test5678");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a Password less than 8 characters", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test");
      cy.get("#password-confirmation").type("test");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register with a Password without number", () => {
      cy.visit("/regiter");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("testtest");
      cy.get("#password-confirmation").type("testtest");
      cy.get(":checkbox").check();
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  
    it("Try to Register without check the 'Accepted terms and conditions'", () => {
      cy.visit("/register");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Test");
      cy.get("#last-name").type("Test");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("test1234");
      cy.get("#password-confirmation").type("test1234");
      cy.get(":submit").click();
      cy.url().should("contain", "/register");
    })
  })