class LoginPage {
    get loginLink() {
        return cy.get("a[href='/login']");
    }

    get emailInput() {
        return cy.get("#email");
    }

    get passwortInput() {
        return cy.get("#password");
    }

    get subbmitButton() {
        return cy.get("button")
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwortInput.type(password);
        this.subbmitButton.click();
    }
}

export const loginPage = new LoginPage();