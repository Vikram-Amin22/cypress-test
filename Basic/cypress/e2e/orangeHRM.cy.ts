
describe('Assertion Demo', () => {
    beforeEach(() => { 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      })


      it('Implicit Assertion', () => {
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','greenhrmlive')

        cy.title().should('include','Orange').and('eq','OrangeHRM').and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') // Logo visible and exist

        cy.xpath('//a').should('have.length','5')  // No of a tag in page

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="username"]').should('have.value', 'Admin') // value check
    })


    it.only('explicit assertion', () => {
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()

       let expName="first last";
       cy.get('.oxd-userdropdown-name').then((x)=>{
                  let actName=x.text()

                  cy.log(actName)

                   // BDD style
                   expect(actName).to.equal(expName)
                  // expect(actName).to.not.equal(expName)

                   //TDD style
                   assert.equal(actName,expName)
                   //assert.notEqual(actName,expName)

         })
    })
})

