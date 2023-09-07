describe('My First Test', () => {
    it('Verify title of page', () => {
  
        cy.visit('https://userlove.io/login')
        cy.title().should('eq', 'Userlove | Sign In')
    })
  })