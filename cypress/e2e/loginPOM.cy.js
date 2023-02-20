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

    it.only("Login with invalid Email adress", () => {
      cy.intercept({
        method: "POST",
        url: "https://gallery-api.vivifyideas.com/api/auth/login"
      }).as("unsuccessfulLogin")

      loginPage.login(credentials.invalidEmail, credentials.password);

      cy.wait("@unsuccessfulLogin").then((intercetion) => {
        console.log("INTERCEPTION", intercetion);
        expect(intercetion.response.statusCode).eq(401);
        expect(intercetion.response.statusMessage).eq("Unauthorized");
      });

      cy.url().should("include", "/login");
      loginPage.errorMessage
          .should("be.visible")
          .and("have.text", "Bad Credentials")
          .and("have.css", "background-color", "rgb(248, 215, 218)")
          .and("have.class", "alert-danger");
    })

    it("Try to Log in with valid Credentials", () => {
      cy.intercept({
        method: "POST",
        url: "https://gallery-api.vivifyideas.com/api/auth/login"
      }).as("successfulLogin")

      loginPage.login(credentials.email, credentials.password);

      cy.wait("@successfulLogin").then((intercetion) => {
        console.log("INTERCEPTION", intercetion);
        expect(intercetion.response.statusCode).eq(200);
      });

      cy.url().should("not.include", "/login");
    })

})
