describe("Newsletter Subscibe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allow users to subscribe to the email list", () => {
        cy.getByData("email-input").type("top@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("top@aol.com")
    })

    // test inavild email address
    it("does not allow a invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })


    it("does Not allow already subscribed email address", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.")
    })

})