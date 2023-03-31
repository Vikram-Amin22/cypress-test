

describe('Handle Tab-approach1',()=>{
    it('Approach1',()=>{
      cy.visit('https://the-internet.herokuapp.com/windows')
      cy.get('.example>a').invoke('removeAttr','target').click()
      cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

      cy.wait(5000);
    //operations
    cy.go('back'); //back  to parent tab
    })
})