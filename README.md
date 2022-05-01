# Demo DApp Test Suite

This is a demo test suite for a demo DApp: https://securrencydapp.vercel.app/

Project is built using Cypress, Cypress Metamask for interactions with Metamask (please see, https://github.com/CraftAcademyLabs/cypress-metamask), and Mochawesome for reporting (please, see https://www.npmjs.com/package/mochawesome).

# Steps to Setup and Run Tests
- Install dependencies by using `npm i` command
- Run the tests using `npm test` command
- Generate HTML report using `npm run generate:html:report` command
- Open the HTML report file in the "report_html" directory and view the results

Please Notes:
- Currently the `npm test` command runs tests in the Chrome browser, in the headed mode, which is the only browser where interactions with metamask work as expected for now.
- Please, do not try to run tests manuall after opening cypress. Interactions with Metamask do not work as expected in that mode.
- A Demo Metamask Account with positive balance on Ropsten test network is already provided in the test to run the tests instantly, but you can also use your own Metamask Account for tests, just replace the metamaskSetupData provided in the "fixtures/testData.js" with yout MetaMask account's data. Please, use only Ropsten Test Network for the tests, as it seems to be the only network that works as expected with the "add citizen" transaction.
