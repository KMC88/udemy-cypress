/// <reference types="Cypress" />

describe("Alias and Invoke", () => {
  it("Validate a specific Hair Care product", () => {
    cy.visit("www.automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate the number of products and Add to Cart title attribute", () => {
    cy.visit("www.automationteststore.com");
    cy.get(".thumbnails .thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale items", () => {
    cy.visit("www.automationteststore.com");
    cy.get(".thumbnails .thumbnail").find(".oneprice").as("productThumbnail");
    // cy.get("@productThumbnail").each(($el, index, $list) => {
    //   cy.log($el.text());
    // });
    cy.get(".thumbnails .thumbnail").find(".oneprice").invoke('text').as('itemPrice');
    cy.get(".thumbnails .thumbnail").find(".pricenew").invoke('text').as('saleItemPrice');

    let itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        let itemPriceTotal = 0;
        let itemPrice = $linkText.split('$');
        let i;
        for(i = 0; i < itemPrice.length; i++){

            cy.log(itemPrice[i]);
            itemPriceTotal += Number(itemPrice[i]);
        }
        itemsTotal += itemPriceTotal;
        cy.log("Non-sale price items total: " + itemsTotal);
    })

    cy.get('@saleItemPrice').then($linkText => {
        let saleItemPriceTotal = 0;
        let saleItemPrice = $linkText.split('$');

        for(let i = 0; i < saleItemPrice.length; i++){

            cy.log(saleItemPrice[i]);
            saleItemPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemPriceTotal;
        cy.log("Sale price items total: " + itemsTotal);
    })

    .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(662);
    });

  });
});
