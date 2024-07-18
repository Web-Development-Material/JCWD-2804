import About from "./page";

describe('<About/>', () => {
    it('renders', () => {
        cy.mount(<About/>)
        cy.get('h2').should('exist').contains('About Page')
        cy.get('a[href="/home"]').should('exist').contains('Navigate to Home')
    })
})