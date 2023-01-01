/* global cy */
describe('Test App', () => {
  it('Visit, find broken links, images are visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
    })
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })
})