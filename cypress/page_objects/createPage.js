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

    get imagesCircleUp() {
        return cy.get(".fas.fa-chevron-circle-up");
    }

    get imagesCircleDown() {
        return cy.get(".fas.fa-chevron-circle-down");
    }

    get deleteImage() {
        return cy.get(".fas.fa-trash")
    }

    create(title, description, url) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imagesInput.type(url);
        this.submitButton.click();
    }
}

export const createGallery = new CreateGallery();
