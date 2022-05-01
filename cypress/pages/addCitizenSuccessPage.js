import { addCitizenSuccessPageLocators } from "../support/locators";

export class AddCitizenSuccessPage {

    getName() {
        return cy.get(addCitizenSuccessPageLocators.name);
    }

    getAge() {
        return cy.get(addCitizenSuccessPageLocators.age);
    }

    getNote() {
        return cy.get(addCitizenSuccessPageLocators.note);
    }
}

