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

    get submitButton() {
        return cy.get("button")
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwortInput.type(password);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();
