/// <reference types="Cypress" />

import { allGalleriesPageLink } from "../page_objects/allGalleries";
import { loginPage } from "../page_objects/loginPage";

const credentials = {
    email: "madeinzvornik@gmail.com",
    password: "Malimrav123"
};

describe("All Galleries Page test", () => {
  beforeEach("Visit App and click the Login link", () => {
    cy.visit("/login");
    loginPage.login(credentials.email, credentials.password);
    cy.url().should("not.contain", "/login")
  });

  it("Load Page successfully", () => {
    cy.url().should("not.include", "/login");
    allGalleriesPageLink.title
        .should("be.visible")
        .and("exist")
        .and("have.text", "All Galleries")
        .and("have.css", "color", "rgb(72, 73, 75)");
    allGalleriesPageLink.navbar
        .should("be.visible")
        .and("exist")
    allGalleriesPageLink.allGalleriesCatch
        .should("be.visible")
        .and("have.length", 10)
    allGalleriesPageLink.singleGallery
        .find("img")
        .should("be.visible")
    allGalleriesPageLink.searchInput
        .should("be.visible")
        .and("exist")
        .and("have.class", "form-control")
    allGalleriesPageLink.filterButton
        .should("be.visible")
        .and("exist")
        .and("have.text", "Filter")
        .and("have.class", "btn-outline-secondary")
    allGalleriesPageLink.loadMore
        .should("be.visible")
        .and("exist")
        .and("have.css", "background-color", "rgb(72, 73, 75)")
        .and("have.class", "btn-custom")
    allGalleriesPageLink.logout
        .should("be.visible")
        .and("exist")
        .and("have.class", "nav-link")
    allGalleriesPageLink.myGalleriesPage
        .should("be.visible")
        .and("exist")
    })
    it("Test Pagination", () => {
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 10);
        allGalleriesPageLink.loadMore.click();
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 20);
        allGalleriesPageLink.loadMore.click();
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 30);
        allGalleriesPageLink.loadMore.click();
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 40);
        allGalleriesPageLink.loadMore.click();
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 50);
    })
    it("Test Search", () => {

        let searchTerm = "Gallery with 2 images"

        allGalleriesPageLink.search(searchTerm);
        allGalleriesPageLink.allGalleriesCatch.should("be.visible").and("have.length", 6);
        allGalleriesPageLink.singleGallery.find("a").first().click();
        cy.get("h1").should("be.visible").and("have.text", searchTerm);
    })
})