class CreateGallery {
    get crateGalleryPageLink() {
        return cy.get('a[href="/create"]');
    }

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get("#description");
    }

    get imagesInput() {
        return cy.get(".input-group");
    }

    get imagesInput2() {
        return cy.get(".input-group").last();
    }

    get addImageButton() {
        return cy.get("button").eq(2);
    }

    get addMoreImageBtn() {
        return cy.contains("Add image");
    }

    get submitButton() {
        return cy.get("button").eq(3);
    }

    get submitButtonAddMore() {
        return cy.get("button").eq(8);
    }

    get cancelButton() {
        return cy.get("button").eq(4);
    }

    get trashIcon() {
        return cy.get("button").eq(0);
    }

    get changeOrderBtn() {
        return cy.get("button").eq(2);
    }

    get createGalleryTitle() {
        return cy.get("h1")
    }

    get titleLabel() {
        return cy.contains("Title:");
    }

    get descriptionLabel() {
        return cy.contains("Descriptions:");
    }

    get imagesLabel() {
        return cy.contains("Images:");
    }

    get imagesCircleUp() {
        return this.imagesInput.find("button").first();
    }

    get imagesCircleDown() {
        return this.imagesInput.find("button").last();
    }

    get deleteImage() {
        return cy.get(".fas.fa-trash")
    }

    get errorMessage() {
        return cy.get("p")
    }

    get allBtns() {
        return cy.get("button")
    }

    create(title, description, url) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.submitButton.click();
    }

    createWithMoreImg(title, description, url, url2) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.addImageButton.click();
        this.imagesInput2.type(url2);
        this.submitButtonAddMore.click();
    }

    cancel(title, description, url) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.cancelButton.click();
    }

    deleteImg(title, description, url, url2) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.addImageButton.click();
        this.imagesInput2.type(url2);
        this.trashIcon.click();
        this.submitButton.click();
    }

    changeOrder(title, description, url, url2) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.addImageButton.click();
        this.imagesInput2.type(url2);
        this.changeOrderBtn.click();
        this.submitButtonAddMore.click();
    }
}

export const createGallery = new CreateGallery();
