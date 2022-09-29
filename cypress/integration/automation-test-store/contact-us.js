/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a succesfull submission via contact us form', () => {
      cy.visit('https://www.automationteststore.com')
      cy.get("a[href$='contact']")
        .click()
        .then(function (contactUsLink) {
          cy.log('Selected link is :' + contactUsLink.text())
        })
      //cy.xpath("//a[contains(@href,'contact')]").click()
      cy.get('#ContactUsFrm_first_name').type('Joe')
      cy.get('#ContactUsFrm_email').type('joe@email.com')
      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.get('#ContactUsFrm_enquiry').type('Do you  provide additional discount on both orders')
      cy.get("button[title='Submit']").click()
      cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
      cy.log('Test has completed')
    })
  })