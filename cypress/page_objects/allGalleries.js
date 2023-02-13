class AllGalleries {
    get allGalleriesPageLink() {
        return cy.get("a[href='/']");
    }

    get searchInput() {
        return cy.get('input');
    }

    get filterButton() {
        return cy.contains("Filter");
    }

    get myGalleriesPage() {
        return cy.get("a[href='/my-galleries']");
    }

    get createGalleryPage() {
        return cy.get("a[href='/create]");
    }

    get loadMore() {
        return cy.contains("Load More");
    }

    get logout() {
        return cy.contains("Logout");
    }

    get navbar() {
        return cy.get("#navbarTogglerDemo01");
    }

    get title() {
        return cy.get("h1");
    }

    get allGalleriesCatch() {
        return cy.get(".grid").children();
    }

    get singleGallery() {
        return cy.get(".cell").first();
    }

    search(searchTerm) {
        this.searchInput.type(searchTerm);
        this.filterButton.click();
    }

}

export const allGalleriesPageLink = new AllGalleries();
