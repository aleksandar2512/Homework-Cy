/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";
import { faker } from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";

describe("Register Form Tests", () => {
    let userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric(8),
      shortPassword: faker.random.alphaNumeric(3),
      passwordWithoutNumber: faker.random.alpha(8),
      mailWithoutDot: "test@mailcom",
      mailWithoutSign: "testmail.com"
      } 
    before("Visit App and click on Register link", () => {
      cy.visit("/register");
      //registerPage.registerLink.click();
      //cy.url().should("contain", "/register");
    })

    it("Register with a valid Data", () => {
        registerPage.registerWithValidData(userData.firstName, userData.lastName, userData.email, userData.password);
        cy.url().should("not.contain", "/register");
    }) 

    it.only("Register through Backend", () => {
      cy.registerViaBackend(userData.email, userData.firstName, userData.lastName, userData.password);
      cy.visit("/login");
      loginPage.login(userData.email, userData.password);
    })

    

})
