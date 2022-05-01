import { homePageLocators } from "../support/locators";

export class HomePage {

    getHeader() {
        return cy.get(homePageLocators.headerLocator);
    }

    getHomeButton() {
        return cy.get(homePageLocators.homeButtonLocator);
    }

    getHomeButtonImage() {
        return cy.get(homePageLocators.homeButtonImageLocator);
    }

    getAddCitizenButton() {
        return cy.get(homePageLocators.addCitizenButtonLocator);
    }

    getWalletAddressField() {
        return cy.get(homePageLocators.walletAddressFieldLocator);
    }

    getCitizensListText() {
        return cy.get(homePageLocators.tableHeaderTextLocator);
    }

    getTableResultsText() {
        return cy.get(homePageLocators.tableResultsTextLocator);
    }

    getTableHeaderColumnValue1() {
        return cy.get(homePageLocators.tableHeaderColumnValue1Locator)
    }

    getTableHeaderColumnValue2() {
        return cy.get(homePageLocators.tableHeaderColumnValue2Locator)
    }

    getTableHeaderColumnValue3() {
        return cy.get(homePageLocators.tableHeaderColumnValue3Locator)
    }

    getTableHeaderColumnValue4() {
        return cy.get(homePageLocators.tableHeaderColumnValue4Locator)
    }

    getCitizensTable() {
        return cy.get(homePageLocators.citizensTableLocator);
    }

    getCitizensTableBody() {
        return cy.get(homePageLocators.citizensTableBodyLocator);
    }

    getPaginationBar() {
        return cy.get(homePageLocators.paginationBarLocator);
    }

    getFirstPaginationButton() {
        return cy.get(homePageLocators.firstPaginationButtonLocator);
    }

    getSecondPaginationButton() {
        return cy.get(homePageLocators.secondPaginationButtonLocator);
    }

    getThirdPaginationButton() {
        return cy.get(homePageLocators.thirdPaginationButtonLocator);
    }

    getNextPaginationButton() {
        return cy.get(homePageLocators.nextPaginationButtonLocator);
    }

    getSkipToLastPaginationButton() {
        return cy.get(homePageLocators.skipToLastPaginationButtonLocator);
    }
    

}