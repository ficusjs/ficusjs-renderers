/* global describe cy before it  */
describe('htm component', () => {
  before(() => {
    cy.visit('htm')
  })

  it('is rendered', () => {
    cy.get('hello-world p')
      .should('have.text', 'Test component')
  })

  it('should trigger an alert', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy
      .get('hello-world button').contains('Click me!').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Hello to you!')
      })
  })
})
