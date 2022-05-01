import { addCitizenPageLocators } from "../support/locators";

export class AddCitizenPage {

    getNameInputField() {
        return cy.get(addCitizenPageLocators.nameInputLocator);
    }

    nameInputFieldType(text) {
        this.getNameInputField().type(text);
    }

    getAgeInputField() {
        return cy.get(addCitizenPageLocators.ageInputLocator);
    }

    ageInputFieldType(text) {
        this.getAgeInputField().type(text);
    }

    getCityInputField() {
        return cy.get(addCitizenPageLocators.cityInputLocator);
    }

    cityInputFieldType(text) {
        this.getCityInputField().type(text);
    }

    getNoteInputField() {
        return cy.get(addCitizenPageLocators.noteInputLocator);
    }

    noteInputFieldType(text) {
        this.getNoteInputField().type(text);
    }

    getAddCitizenButton() {
        return cy.get(addCitizenPageLocators.addCitizenButtonLocator);
    }

    clickAddCitizenButton() {
        this.getAddCitizenButton().click();
    }

    getLoadingStateButton() {
        return cy.contains(addCitizenPageLocators.loadingStateButtonContainsLocator, { timeout: 180000 });
    }

    getAddCitizenSuccessPopUp() {
        return cy.contains(addCitizenPageLocators.citizenCreatedSuccessPopupContainsLocator);
    }

}
