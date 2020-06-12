/// <reference types="Cypress" />
describe("visit the link", function () {
  this.beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  // it("visiting website", function () {
  //   cy.visit(Cypress.env("url"));
  // });

  it("validate Cancel button modal message functionality in Installed tab", function () {
    cy.visit(Cypress.env("url"));
    cy.clickTab("Available to install");
    cy.clickTab("installed");
    this.data.options.forEach(function (option) {
      cy.clickButton(option);
      cy.clickPopupOption("Cancel");
    });
  });
});
