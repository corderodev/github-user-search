/* global cy */
describe('Test App', () => {
  it('testing search user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('midudev')
    cy.get('button').click()
  })
})