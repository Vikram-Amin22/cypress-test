

describe('Logun', () => {
    it('Data Driven Test', () => {
        cy.fixture('users').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                if(userdata.username=='Admin' &&userdata.password=='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }else{
                    cy.get("div[role='alert']").should('have.text',userdata.expected);
                }
            })
        })
    })
})