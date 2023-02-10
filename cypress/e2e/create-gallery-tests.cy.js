/// <reference types="Cypress" />

import { createGallery } from "../page_objects/createPage";
import { loginPage } from "../page_objects/loginPage";

let createData = {
    title: "test-title",
    descriptions: "test-descriptions",
    url: "https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__480.png"
}

describe("Create Gallery tests", () => {
    it("Log in first", () => {
      cy.visit('/login')
      loginPage.login("madeinzvornik@gmail.com", "Malimrav123");
      cy.url().should("not.contain", '/login');

})

    it("Create a Gallery", () => {
        createGallery.crateGalleryLink.click();
        cy.url().should("contain", "/create");
        createGallery.create(createData.title, createData.descriptions, createData.url);
    })
})
