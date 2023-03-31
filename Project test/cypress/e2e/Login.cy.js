import Login from '../PageObjects/Login'
import users from '../fixtures/Login.json'

describe('Login Testing', () => {
    //login
    for (let user in users) {
        let email=users[user].email;
        let password=users[user].password;
        let statusCode=users[user].statusCode;
        it('Login', () => {
                cy.intercept('POST', '**/api/users/login').as('login');
                    cy.visit('/login');
                    const ln = new Login();
                    ln.setLogin()
                    cy.get('#dmxValidatorErrorformLoginemail').should('have.text', 'This field is required.');
                    cy.get('#dmxValidatorErrorformLoginpassword').should('have.text', 'This field is required.');
                    ln.setEmail(email)
                    ln.setLogin()
                    cy.get('#dmxValidatorErrorformLoginpassword').should('have.text', 'This field is required.');
                    ln.setPassword(password)
                    ln.setCheckLogin()
                    ln.setLogin()
                    cy.wait('@login', { requestTimeout: 10000 });
                    cy.get('@login').then((xhr) => {
                    expect(xhr.response.statusCode).to.eq(statusCode);
            })
        })
    }
})