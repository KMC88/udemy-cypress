/// <reference types="Cypress"/>

describe('Selector examples', () => {
    it('Examples of Selectors via Webdriveruni Contact page', () => {
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
  
      // By tag name
      cy.get('input')
  
      // By attribute name and value
      cy.get('input[name="first_name"]')
  
      // By Id
      cy.get('#contact_me')
  
      // By class
      cy.get('.feedback-input')
  
      // By multiple classes
      cy.get("[class='navbar navbar-inverse navbar-fixed-top']")
  
      // By two duifferent attributes
      cy.get("[name='email'][placeholder='Email Address']")
  
      // By xpath
      cy.xpath("//input[@name='first_name']")
    })
  })