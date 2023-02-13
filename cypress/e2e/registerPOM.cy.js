/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";
import { faker } from '@faker-js/faker';

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
      registerPage.registerLink.click();
      cy.url().should("contain", "/register");
    })

    it.only("Register with a valid Data", () => {
        registerPage.registerWithValidData(userData.firstName, userData.lastName, userData.email, userData.password);
        cy.url().should("not.contain", "/register");
    }) 

})
