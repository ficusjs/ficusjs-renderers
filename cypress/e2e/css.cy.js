/* global describe cy before it expect */
describe('css component', () => {
  before(() => {
    cy.visit('css')
  })

  it('is rendered', () => {
    cy.get('hello-world p')
      .should('have.text', 'Test component')
  })

  it('has custom styles', () => {
    cy.get('hello-world p')
      .then($el => {
        const win = $el[0].ownerDocument.defaultView
        const styles = win.getComputedStyle($el[0])
        const bgColorValue = styles.getPropertyValue('background-color')
        const colorValue = styles.getPropertyValue('color')
        expect(bgColorValue).to.eq('rgb(128, 0, 128)')
        expect(colorValue).to.eq('rgb(255, 192, 203)')
      })
  })

  it('has head styles', () => {
    cy.get('head > style[data-tag="hello-world"]')
      .should('have.length', 1)
  })
})
