class LandingPage
{
    navigate()
    {
        cy.visit('https://www.spinbet.com');
    }

    clickSignUpButton()
    {
        return cy.contains('Sign up').click({force: true});
    }

    clickCasinoButton()
    {
        return cy.get('.css-pxe2nv').click({force: true});
    }
}
export default LandingPage