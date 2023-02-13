/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { loginPage } from "../page_objects/loginPage";

let credentials = {
        email: "madeinzvornik@gmail.com",
        invalidEmail: faker.internet.email(),
        password: "Malimrav123",
        invalidPassword: faker.lorem.word()
    };

describe("Login Form Tests", () => {
    beforeEach("Visit App and click the Login link", () => {
      cy.visit("/login");
      loginPage.loginLink.click()
      cy.url().should("include", "/login");
      loginPage.loginPageHeading
          .should("be.visible")
          .and("have.text", "Please login");
    });

    it("Login with invalid Email adress", () => {
      loginPage.login(credentials.invalidEmail, credentials.password);
      cy.url().should("include", "/login");
      loginPage.errorMessage
          .should("be.visible")
          .and("have.text", "Bad Credentials")
          .and("have.css", "background-color", "rgb(248, 215, 218)")
          .and("have.class", "alert-danger");
    })

    it("Try to Log in with valid Credentials", () => {
      loginPage.login(credentials.email, credentials.password);
      cy.url().should("not.include", "/login");
    })

})
