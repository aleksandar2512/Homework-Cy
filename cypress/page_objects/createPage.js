class CreateGallery {
    get crateGalleryLink() {
        return cy.get('a[href="/create"]');
    }

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionsInput() {
        return cy.get("#description");
    }

    get images() {
        return cy.get("url");
    }

    get addImageButton() {
        return cy.get("button");
    }

    get subbmitButton() {
        return cy.get("subbmit");
    }

    create(title, descriptions, url) {
        this.titleInput.type(title);
        this.descriptionsInput.type(descriptions);
        this.images.type(url);
        this.subbmitButton.click();
    }
}

export const createGallery = new CreateGallery();
