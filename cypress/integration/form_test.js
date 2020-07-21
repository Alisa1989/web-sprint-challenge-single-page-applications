describe("Testing form inputs", () => {
    beforeEach(function() {
        //Arrange
        cy.visit("http://localhost:3000/pizza");
    });

    it("Input name into the name input", () => {
        //Arrange - get the element
        cy.get('input[name="name"]')
        //Act - mimic user interaction
        .type("Alexandre")
        //Assert - test/ verify
        .should("have.value", "Alexandre");       
    });

    it("checks the gluten free option", ()=> {
        cy.get('input[name="glutenFree"]').check().should("be.checked");
    })

    it("checks the olives toppings", ()=> {
        cy.get('[data-cy="olives"]').check().should("be.checked");
    })

    it("checks box input", ()=>{
        cy.get('textarea#specialInstructions').type("extra crispy").should("have.value", "extra crispy");
    })

    it("checks the submit button", ()=>{
        cy.get('form').submit();
    })
});