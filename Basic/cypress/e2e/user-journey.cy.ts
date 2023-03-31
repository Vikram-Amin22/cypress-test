
describe("user journey", () => {
    beforeEach(() => { //beforEach() hook. This is a function that will get called “before each” test is run
        cy.visit("http://localhost:3000")
      })

    it("a user can find a course on the home page and complete the courses lesson", () => {
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")

        cy.getByData("challenge-answer-0").click() // answer checkbox 
        cy.getByData("next-lesson-button").should("exist").click()  // next lesson button
        cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test") /// verify the path

        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq","/testing-your-first-application/setting-up-data-before-each-test")

        
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq", "/")
    })
})