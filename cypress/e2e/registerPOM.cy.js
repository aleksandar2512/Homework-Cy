/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";

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
    before("Visit App and click on Register link", () => {
      cy.visit("/register");
      registerPage.registerLink.click();
      cy.url().should("contain", "/register");
    })

    it("Register with a valid Data", () => {
        registerPage.registerWithValidData(userData.firstName, userData.lastName, userData.email, userData.password);
        cy.url().should("not.contain", "/register");
    }) 

})
