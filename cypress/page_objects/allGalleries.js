class AllGalleries {
    get allGalleriesPageLink() {
        return cy.get("a[href='/']");
    }

    get searchInput() {
        return cy.get('[aria-label="Search..."]');
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
        return cy.contains("All Galleries");
    }
}

export const allGalleriesPageLink = new AllGalleries();
