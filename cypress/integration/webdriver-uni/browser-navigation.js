/// <reference types="Cypress" />

describe("Validate WebDriverUni homepage links", () => {
    it("Confirm links redirect to the correct page", () => {
      //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      cy.visit("/");
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
      cy.url().should('include', 'contactus');

      cy.go('back');
      cy.reload();
    //   cy.reload(true); //reload without cache
    cy.url().should('include', 'http://www.webdriveruniversity.com/');

    cy.go('forward');
    cy.url().should('include', 'contactus');

    cy.go('back')
    cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
    

    cy.go('back');
    cy.url().should('include', 'www.webdriveruniversity.com/');
    cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
    cy.url().should('include', 'To-Do-List');
    });
  
    
  });
  