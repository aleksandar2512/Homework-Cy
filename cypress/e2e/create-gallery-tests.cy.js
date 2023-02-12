/// <reference types="Cypress" />

import { createGallery, createGalleryPageLink } from "../page_objects/createPage";
import { loginPage } from "../page_objects/loginPage";

describe("Create Gallery tests", () => {
    let createGalleryData = {
       title: "test title",
       description: "test descripton",
       url: "https://live.staticflickr.com/5334/7173684176_f55a5ddcac_n.jpg",
       nonTitle: " ",
       nonDescription: " ",
       longDescription: "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
       nonImages: " ",
       shortTitle: "t",
       longTitle: "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
       invalidExtension: "https://live.staticflickr.com/5334/7173684176_f55a5ddcac_n.txt",
    }
    let loginData = {
       email: "madeinzvornik@gmail.com",
       password: "Malimrav123"
    }
    beforeEach("Visit App and click on Login page link", () => {
       cy.visit("/login");
       loginPage.loginLink.click();
       loginPage.login(loginData.email, loginData.password);
       cy.url().should("not.contain", "/login");
    })

    it("Create a Gallery without Title", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.nonTitle, createGalleryData.description, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with a Title less than 2 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.shortTitle, createGalleryData.description, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with a Title more than 255 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.longTitle, createGalleryData.description, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery without Description", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.nonDescription, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it.only("Create a Gallery with Description more than 1000 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.longDescription, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery without Images", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.nonImages)
    })

    it("Create a Gallery with invalid URL extension", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.invalidExtension)
    })

    it("Create a Gallery with valid Data", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.url)
    })
});