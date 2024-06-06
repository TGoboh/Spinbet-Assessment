class CasinoPage
{
    clickCasinoButton()
    {
        return cy.get('.css-pxe2nv').click({force: true});
    }

    clickSearchButton()
    {
        return cy.get('.css-k9fdwy').click({force: true});
    }

    enterValidSearchData()
    {
        return cy.get("input[placeholder='Search']").type('book of dead');
    }

    verifySearchResult()
    {
        return cy.get('.css-xl95bq').should('have.text', 'Book of Dead');
    }

    enterInvalidSearchData()
    {
        return cy.get("input[placeholder='Search']").type('Abracadabra');
    }

    verifyInvalidSearchResult()
    {
        return cy.get('.css-19apxyd').should('have.text', 'No results found');
    }
}

export default CasinoPage