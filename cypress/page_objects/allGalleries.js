class AllGalleries {
    get allGalleriesPage() {
        return cy.get("a[href='/']");
    }

    get searchInput() {
        return cy.get(".form-control");
    }

    get filterButton() {
        return cy.get("button");
    }

    get myGalleries() {
        return cy.get("a[href='/my-galleries']");
    }

    get createGallery() {
        return cy.get("a[href='/create/]");
    }

    get loadMore() {
        return cy.get(".btn.btn-custom");
    }

    get logout() {
        return cy.get("a[role='button']")
    }

    get openGalleryByTitle() {
        return cy.get("a[href='/galleries/34']");
    }

    get openGalleryByAuthor() {
        return cy.get("a[href='/authors/32']");
    }

    search(text) {
        this.searchInput.type(text);
        this.filterButton.click();
    }
}

export const allGalleriesPage = new AllGalleries();
