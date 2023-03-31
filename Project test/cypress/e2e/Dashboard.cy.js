

describe('Dashboard Testion', () => {
    beforeEach(() => {
        cy.visit('https://frx-wl-one.slashash.dev/dashboard')
    })

    it('Dashboard', () => {
        cy.url().should('eq', 'https://frx-wl-one.slashash.dev/dashboard')
        cy.title().should('eq', 'Dashboard')

    })
})