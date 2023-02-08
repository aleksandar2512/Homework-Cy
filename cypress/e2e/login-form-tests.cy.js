/// <reference types="Cypress" />

describe("Login Form Tests", () => {
  it("Try to Log in with a valid Password, without an Email address", () => {
    cy.visit("/login");
    cy.get(".nav-link").eq(1).click();
    cy.get("#password").type("Malimrav123");
    cy.get(":submit").click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with a valid Email address, without an Password", () => {
    cy.visit("/login");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("madeinzvornik@gmail.com");
    cy.get(":submit").click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in without any Credentials", () => {
    cy.visit("/login");
    cy.get(".nav-link").eq(1).click();
    cy.get(":submit").click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with a valid Email address, but the wrong Password", () => {
    cy.visit("/login");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("madeinzvornik@gmail.com")
    cy.get("#password").type("NekaDrugaSifra");
    cy.get(":submit").click();
    cy.url().should("contain", "/login");
  })

  it("Try to Log in with non-registered User's Email address", () => {
    cy.visit("/login");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("nekidrugi@gmail.com")
    cy.get("#password").type("Malimrav123");
    cy.get(":submit").click();
    cy.url().should("contain", "/login");
  })
})
