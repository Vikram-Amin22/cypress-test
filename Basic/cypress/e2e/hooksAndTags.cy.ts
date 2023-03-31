
describe('MyTestSuite',()=>{
    before(()=>{
        cy.log('*****    Launch app     ******');
    })

    after(()=>{
        cy.log('*****    close app     ******');
    })

    beforeEach(()=>{
        cy.log('*****    login app     ******');
    })

    afterEach(()=>{
        cy.log('*****    logout app     ******');
    })

    it('search',()=>{
        cy.log('****   Searching   *****');
    })

    it('advanced search',()=>{
        cy.log('****   advanced search   *****');
    })

    it.only('listing Products',()=>{
        cy.log('****   listing Products  *****');       
    })
})