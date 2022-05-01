import { HomePage } from "../../pages/homePage";
import { metamaskSetupData, expectedTexts, attributes, inputTexts } from "../../fixtures/testData";
import { AddCitizenPage } from "../../pages/addCitizenPage";
import { AddCitizenSuccessPage } from "../../pages/addCitizenSuccessPage";

const homePage = new HomePage;
const addCitizenPage = new AddCitizenPage;
const addCitizenSuccessPage = new AddCitizenSuccessPage;

describe('Securrency DApp Demo Tests', () => {
    before(() => {
        cy.setupMetamask(metamaskSetupData.secretWords, metamaskSetupData.network, metamaskSetupData.password);
        cy.visit(`${Cypress.env('baseUrl')}`);
        cy.acceptMetamaskAccess();
        cy.getMetamaskWalletAddress().then(($address) => {
            homePage.getWalletAddressField().should('have.value', $address.toLowerCase());
        })
    });

    it('Verify Header: Connected State', () => {
        // Verify Header is visible
        homePage.getHeader().should('be.visible');

        // Verify Home Button is visible and has a link
        homePage.getHomeButton().should('be.visible');
        homePage.getHomeButton().should('have.attr', attributes.href);

        // Verify Home Button Image is visible and has src attribute
        homePage.getHomeButtonImage().should('be.visible');
        homePage.getHomeButtonImage().should('have.attr', attributes.src);

        // Verify "add citizen" button is vsisible, enabled and has correct text
        homePage.getAddCitizenButton().should('be.visible');
        homePage.getAddCitizenButton().should('be.enabled');
        homePage.getAddCitizenButton().should('have.text', expectedTexts.addCitizenButtonText);

        // Verify wallet address is input is displayed and is read only
        homePage.getWalletAddressField().should('be.visible');
        homePage.getWalletAddressField().should('have.attr', attributes.readonly);
    })

    it('Verify "Citizens List" Table Default Layout', () => {

        // Verify "Citizens List" table header text is displayed and has correct text
        homePage.getCitizensListText().should('be.visible');
        homePage.getCitizensListText().should('have.text', expectedTexts.citizensListText);


        // Verify "total records : {number}" table header text is displayed
        homePage.getTableResultsText().should('be.visible');
        homePage.getTableResultsText().should('contain.text', expectedTexts.totalRecordsText);


        // Verify Table Column Titles are correctly displayed
        homePage.getTableHeaderColumnValue1().should('have.text', expectedTexts.tableHeaderColumnText1);
        homePage.getTableHeaderColumnValue2().should('have.text', expectedTexts.tableHeaderColumnText2);
        homePage.getTableHeaderColumnValue3().should('have.text', expectedTexts.tableHeaderColumnText3);
        homePage.getTableHeaderColumnValue4().should('have.text', expectedTexts.tableHeaderColumnText4);


        // Verify "Citizens List" Table is visible
        homePage.getCitizensTable().should('be.visible');


        // Verify "Citizens List" table has 5 items loaded on one page
        homePage.getCitizensTableBody().find('.css-0').its('length').should('eq', 5);


        // Verify "Citizens List" table pagination default state 
        homePage.getPaginationBar().should('be.visible');
        homePage.getFirstPaginationButton().should('have.text', 1);
        homePage.getFirstPaginationButton().should('have.class', 'css-1nb9743');
        homePage.getSecondPaginationButton().should('have.text', 2);
        homePage.getSecondPaginationButton().should('have.class', 'css-n1k2ji');
        homePage.getThirdPaginationButton().should('have.text', 3);
        homePage.getThirdPaginationButton().should('have.class', 'css-n1k2ji');
        homePage.getNextPaginationButton().should('be.visible');
        homePage.getSkipToLastPaginationButton().should('be.visible');
    })

    it('Verify Add Citizen Functionality', () => {
        // Go to Add Citizen Page
        homePage.getAddCitizenButton().click();
        cy.url().should('contain', 'add-citizen');

        // Input all the required data, click "Add Citizen" button
        addCitizenPage.nameInputFieldType(inputTexts.name);
        addCitizenPage.ageInputFieldType(inputTexts.age);
        addCitizenPage.cityInputFieldType(inputTexts.city);
        addCitizenPage.noteInputFieldType(inputTexts.note);
        addCitizenPage.clickAddCitizenButton();

        // Confirm Metamask Transaction
        cy.confirmMetamaskTransaction();        

        // Wait for loading to finish, verify the success pop-up appears
        addCitizenPage.getLoadingStateButton().should('not.exist');
        addCitizenPage.getAddCitizenSuccessPopUp().should('be.visible');

        // Confirm data is correctly published
        addCitizenSuccessPage.getName().should('have.text', inputTexts.name);
        addCitizenSuccessPage.getAge().should('have.text', inputTexts.age);
        addCitizenSuccessPage.getNote().should('have.text', inputTexts.note);
    })
})