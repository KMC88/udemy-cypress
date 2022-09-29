/// <reference types="Cypress" />

import { first } from "lodash";

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("www.automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    // const header = cy.get("h1 .maintext");
    // cy.log(header);

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it("Validate properties of the contact us page", () => {
    cy.visit("www.automationteststore.com/index.php?rt=content/contact");

    //uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

    //JQuery approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNameText = text.find('#field_11').text();
        expect(firstNameText).to.contain('First name');

        //Embedded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text());
            cy.log(fnText);
        })
    })


    //Embedded commands (Closure)


  });
});
