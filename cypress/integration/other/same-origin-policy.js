/// <reference types="Cypress" />


describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
      //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      cy.visit("https://www.webdriveruniversity.com/");
      cy.visit("https://www.automationteststore.com/");
      
    });
  
    it("Validate visiting two different domains via user actions", () => {
      //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      cy.visit("https://www.webdriveruniversity.com/");
      cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
      
    });
  });