
describe('Check UI Element', () => {
    
    it.skip('Checking Redio Buttons',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //selecting redio buttons
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')
    })


    it('Checking CheckBoxes',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // cy.get('input#monday').should('be.visible')

        // //select check box
        // cy.get('input#monday').check().should('be.checked')

        // //unselect check box 
        // cy.get('input#monday').uncheck().should('not.be.checked')


        // // select all check boxes
        // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')


        // // select first chechbox
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
    })
})