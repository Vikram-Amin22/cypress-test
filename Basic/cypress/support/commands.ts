/// <reference types="cypress" />

/// <reference types="cypress-xpath" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click();
})


// Cypress.Commands.add('login', () => {
//     cy.visit('https://demo.realworld.io/#/login')
//     cy.get('[data-test=email]').type("joe@example.com")
//     cy.get('[data-test=password]').type("joe{enter}")
//     cy.hash().should('eq', '#/')
//     cy.visit('https://demo.realworld.io/#/settings')
// })

