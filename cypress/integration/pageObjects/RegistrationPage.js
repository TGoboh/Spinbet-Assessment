
class RegistrationPage
{
    username()
    {
        return cy.get('#Username')
    }

    email()
    {
        return cy.get("input[name='email']")
    }

    enterPassword()
    {
        return cy.get('#Password').type('Pass@123');
    }

    enterDay()
    {
        return cy.get("input[name='day']").type('27');
    }

    enterMonth()
    {
        return cy.get("input[name='month']").type('10');
    }

    enterYear()
    {
        return cy.get("input[name='year']").type('1995');
    }

    phoneNumber()
    {
        return cy.get("input[name='mobilePhone']")
    }

    clickAgreementBox()
    {
        return cy.get("input[type='checkbox']").eq(1).click();
    }

    clickRegisterButton()
    {
        return cy.get('.css-1xkusk8 > .MuiButtonBase-root > .text').click();
    }

    verifyUrlTitle()
    {
        return cy.title().should('eq', 'Online Casino & Sports Betting Powerhouse | SpinBet');
    }
    
}

export default RegistrationPage