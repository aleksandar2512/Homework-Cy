/// <reference types="Cypress" />

import { createGallery, createGalleryPageLink } from "../page_objects/createPage";
import { loginPage } from "../page_objects/loginPage";

describe("Create Gallery tests", () => {
    let createGalleryData = {
       title: "test title",
       description: "test descripton",
       url: "https://live.staticflickr.com/5334/7173684176_f55a5ddcac_n.jpg"
    }
    let loginData = {
       email: "madeinzvornik@gmail.com",
       password: "Malimrav123"
    }
    before("Visit App and click on Login page link", () => {
       cy.visit("/login");
       loginPage.loginLink.click();
       loginPage.login(loginData.email, loginData.password);
       cy.url().should("contain", "/login");
    })

    it("Create Gallery with a valid Data", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.url)
    })
});