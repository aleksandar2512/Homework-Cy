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
        return cy.get('input[type="url"]');
    }

    get addImageButton() {
        return cy.contains("Add image");
    }

    get submitButton() {
        return cy.contains("Submit");
    }

    get cancelButton() {
        return cy.contains("Cancel");
    }

    get createGalleryTitle() {
        return cy.contains("Create Gallery")
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

    create(title, description, url) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.images.type(url);
        this.submitButton.click();
    }
}

export const createGalleryPageLink = new CreateGallery();
