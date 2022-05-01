export const homePageLocators = {
    //Header Locators
    headerLocator: '.chakra-container > .css-1ialerq',
    homeButtonLocator: '.chakra-container > .css-1ialerq > a',
    homeButtonImageLocator: '.chakra-container > .css-1ialerq > a > span > img',
    addCitizenButtonLocator: '.css-aummgo',
    walletAddressFieldLocator: '.chakra-input',

    // Table Locators
    tableHeaderTextLocator: '.chakra-container .css-1eam21a',
    tableResultsTextLocator: '.chakra-container .css-9f6g39',
    tableHeaderColumnValue1Locator: '.chakra-table > thead > tr > :nth-child(1)',
    tableHeaderColumnValue2Locator: '.chakra-table > thead > tr > :nth-child(2)',
    tableHeaderColumnValue3Locator: '.chakra-table > thead > tr > :nth-child(3)',
    tableHeaderColumnValue4Locator: '.chakra-table > thead > tr > :nth-child(4)',
    citizensTableLocator: '.chakra-table',
    citizensTableBodyLocator: '.chakra-table > tbody',

    // Table Pagination Locators
    paginationBarLocator: '.chakra-stack',
    firstPaginationButtonLocator: '.chakra-stack > :nth-child(1)',
    secondPaginationButtonLocator: '.chakra-stack > :nth-child(2)',
    thirdPaginationButtonLocator: '.chakra-stack > :nth-child(3)',
    nextPaginationButtonLocator: '.chakra-stack > :nth-child(4)',
    skipToLastPaginationButtonLocator: '.chakra-stack > :nth-child(5)'
}

export const addCitizenPageLocators = {
    nameInputLocator: '#name-input',
    ageInputLocator: '#age-input',
    cityInputLocator: '#city-input',
    noteInputLocator: '#someNote-input',
    addCitizenButtonLocator: 'button[type="submit"]',
    loadingStateButtonContainsLocator: 'Loading...',
    citizenCreatedSuccessPopupContainsLocator: 'Citizen created.'
}

export const addCitizenSuccessPageLocators = {
    name: 'tbody > :nth-child(2) > .css-xumdn4',
    age: 'tbody > :nth-child(3) > .css-xumdn4',
    note: 'tbody > :nth-child(4) > .css-xumdn4'
}