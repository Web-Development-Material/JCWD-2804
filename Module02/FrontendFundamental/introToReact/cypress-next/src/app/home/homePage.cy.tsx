import Home from "./page"

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />)
    cy.wait(1000)
    cy.get('#title-page').should('exist').contains('Home Page')
    cy.get('#sub-title-page').should('exist').contains('Welcome to Home Page')
    cy.get('a[href="/about"]').should('exist').contains('Navigate to About')
  })
})
