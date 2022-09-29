class Contact_Us_PO {
  visitContactUsPage() {
    cy.visit(Cypress.env("webdriveruni_contactuspage"));
  }

  contactForm_Submission(){

  }
}

export default Contact_Us_PO;
