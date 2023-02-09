/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

let credentials = {
        email: "test@mail.com",
        password: "test1234",
    };

describe("Login Form Tests", () => {
    before("Visit App and click the Login link", () => {
      cy.visit("/login");
      loginPage.loginLink.click()
    });

    it("Try to Log in with valid Credentials", () => {
      loginPage.login(credentials.email, credentials.password);
    })

})
