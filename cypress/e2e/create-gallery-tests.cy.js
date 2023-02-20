/// <reference types="Cypress" />

import { createGallery } from "../page_objects/createPage";
import { loginPage } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';

describe("Create Gallery tests", () => {
    let createGalleryData = {
       title: faker.random.words(3),
       description: faker.random.words(7),
       url: "https://live.staticflickr.com/5334/7173684176_f55a5ddcac_n.jpg",
       url2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
       pngImage: "https://toppng.com/uploads/preview/cat-png-transparent-cats-11563647803vsex8nq98w.png",
       jepgImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hermitage_cat.jpeg",
       nonTitle: " ",
       nonDescription: " ",
       longDescription: faker.random.alpha(1001),
       nonImages: " ",
       shortTitle: faker.random.alpha(1),
       longTitle: faker.random.alpha(256),
       invalidExtension: "https://live.staticflickr.com/5334/7173684176_f55a5ddcac_n.txt",
    }
    let loginData = {
       email: "madeinzvornik@gmail.com",
       password: "Malimrav123"
    }

    beforeEach("Visit App and click on Login page link", () => {
       cy.loginViaBackend()
    })
    
    it("Load 'Create Gallery' page successfully", () => {
        cy.visit("/create");
        cy.url().should("contain", "/create");
        createGallery.createGalleryTitle
                .should("exist")
                .and("be.visible")
                .and("have.text", "Create Gallery")
                .and("have.css", "color", "rgb(72, 73, 75)");
        createGallery.titleLabel
                .should("exist")
                .and("be.visible")
                .and("have.text", "Title:");
        createGallery.descriptionLabel
                .should("exist")
                .and("be.visible")
                .and("have.text", "Descriptions:");
        createGallery.imagesLabel
                .should("exist")
                .and("be.visible")
                .and("have.text", "Images:");
        createGallery.titleInput
                .should("be.visible")
                .and("have.id", "title")
                .and("have.css", "background-color", "rgb(255, 255, 255)")
                .and("be.empty");
        createGallery.descriptionInput
                .should("be.visible")
                .and("have.id", "description")
                .and("have.css", "background-color", "rgb(255, 255, 255)")
                .and("be.empty");
        createGallery.imagesInput
                .should("exist")
                .and("be.visible")
        createGallery.imagesCircleUp
                .should("exist")
                .and("be.visible")
                .and("have.class", "input-buttons");
        createGallery.imagesCircleDown
                .should("exist")
                .and("be.visible")
                .and("have.class", "input-buttons");
        createGallery.addImageButton
                .should("exist")
                .and("be.visible")
                .and("have.text", "Add image");
        createGallery.submitButton
                .should("exist")
                .and("be.visible")
                .and("have.text", "Submit")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.css", "background-color", "rgb(72, 73, 75)");
        createGallery.cancelButton
                .should("exist")
                .and("be.visible")
                .and("have.text", "Cancel")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.css", "background-color", "rgb(72, 73, 75)");
    })

    it("Load new Buttons when 'Add image' is clicked", () => {
        cy.visit("/create");
        createGallery.addImageButton.click();
        createGallery.allBtns.should("be.visible")
                             .and("have.length", 9);
    })

    it("Test 'Image URL' input Pagination", () => {
        cy.visit("/create");
        createGallery.imagesInput.should("be.visible").and("have.length", 1)
        createGallery.addImageButton.click();
        createGallery.imagesInput.should("be.visible").and("have.length", 2)
        createGallery.addMoreImageBtn.click();
        createGallery.imagesInput.should("be.visible").and("have.length", 3)
        createGallery.addMoreImageBtn.click();
        createGallery.imagesInput.should("be.visible").and("have.length", 4)
        createGallery.addMoreImageBtn.click();
        createGallery.imagesInput.should("be.visible").and("have.length", 5)
        createGallery.addMoreImageBtn.click();
    })

    it("Create a Gallery without Title", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.nonTitle, createGalleryData.description, createGalleryData.url)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with a Title less than 2 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.shortTitle, createGalleryData.description, createGalleryData.url)
        createGallery.errorMessage
                .should("be.visible")
                .and("have.class", "alert-danger")
                .and("have.text", "The title must be at least 2 characters.")
                .and("have.css", "background-color", "rgb(248, 215, 218)");
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with a Title more than 255 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.longTitle, createGalleryData.description, createGalleryData.url)
        createGallery.errorMessage
                .should("be.visible")
                .and("have.class", "alert-danger")
                .and("have.text", "The title may not be greater than 255 characters.")
                .and("have.css", "background-color", "rgb(248, 215, 218)");
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with Description more than 1000 characters", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.longDescription, createGalleryData.url)
        createGallery.errorMessage
                .should("be.visible")
                .and("have.class", "alert-danger")
                .and("have.text", "The description may not be greater than 1000 characters.")
                .and("have.css", "background-color", "rgb(248, 215, 218)");
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery without Images", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.nonImages)
        cy.url().should("contain", "/create");
    })

    it("Create a Gallery with invalid URL extension", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.invalidExtension)
        createGallery.errorMessage
                .should("be.visible")
                .and("have.class", "alert-danger")
                .and("have.text", "Wrong format of image")
                .and("have.css", "background-color", "rgb(248, 215, 218)");
        cy.url().should("contain", "/create");
    })

    it("Cancel Gallery creation", () => {
        cy.visit("/create");
        createGallery.cancel(createGalleryData.title, createGalleryData.description, createGalleryData.url)
        cy.url().should("not.contain", "/create");
    })

    it("Trash Icon Funcionality: Delete the Image when creating a Gallery with more Images", () => {
        cy.visit("/create");
        createGallery.deleteImg(createGalleryData.title, createGalleryData.description, createGalleryData.url, createGalleryData.url2)
        cy.url().should("not.contain", "/create");
    })

    it("Changing the order of Images in the Gallery", () => {
        cy.visit("/create");
        createGallery.changeOrder(createGalleryData.title, createGalleryData.description, createGalleryData.url, createGalleryData.url2)
        cy.url().should("not.contain", "/create");
    })

    it("Create a Gallery without Description", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.nonDescription, createGalleryData.url)
        cy.url().should("not.contain", "/create");
    })

    it("Create a Gallery with valid Data: PNG format Image", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.pngImage)
        cy.url().should("not.contain", "/create");
    })

    it("Create a Gallery with valid Data: JEPG format Image", () => {
        cy.visit("/create");
        createGallery.create(createGalleryData.title, createGalleryData.description, createGalleryData.jepgImage)
        cy.url().should("not.contain", "/create");
    })

    it("Create a Gallery with two or more Images", () => {
        cy.visit("/create");
        createGallery.createWithMoreImg(createGalleryData.title, createGalleryData.description, createGalleryData.url, createGalleryData.url2)
        cy.url().should("not.contain", "/create");
    })
});