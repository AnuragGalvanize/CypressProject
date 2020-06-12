// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
import Installed from "./pageObject/Installed";
Cypress.Commands.add("clickTab", (tabName) => {
  Installed.getInstalledObject()
    .getTab()
    .each(($el, index, list) => {
      if ($el.text().toLowerCase().trim() === tabName.toLowerCase().trim()) {
        Installed.getInstalledObject().getTab().eq(index).click();
      }
    });
});
Cypress.Commands.add("clickButton", (tabName) => {
  Installed.getInstalledObject()
    .getPanel()
    .find(Installed.getInstalledObject().getButton())
    .each(($el, index, list) => {
      if ($el.text().toLowerCase().trim() === tabName.toLowerCase().trim()) {
        cy.get(Installed.getInstalledObject().getButton()).eq(index).click();
        cy.on("window:confirm", (str) => {
          expect(str).to.contains("contains");
        });
        // cy.get('svg[class*="Times"]').click();
        // Installed.getInstalledObject()
        //   .getPopupButton()
        //   .find('button[class*="Button"]')
        //   .contains("Cancel")
        //   .click();
        //Installed.getInstalledObject().clickCancel();
      }
    });
});

Cypress.Commands.add("clickPopupOption", (optionName) => {
  return cy.contains(optionName).click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
