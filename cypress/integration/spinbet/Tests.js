import { faker } from '@faker-js/faker';
import LandingPage from '../pageObjects/LandingPage';
import RegistrationPage from '../pageObjects/RegistrationPage';
import CasinoPage from '../pageObjects/CasinoPage';


describe('Registration Tests', function() 
{
    const generateRandomName = () => {
        return faker.random.alpha({ count: 8 });
      };

      const getRandomNumber = () => {
        return Math.floor(Math.random() * 1000000000); // Generates a random 9-digit number
      };

      const landingPage = new LandingPage
      const registrationPage = new RegistrationPage
      const casinoPage = new CasinoPage

    it('Verify users can register successfully using valid data', function()
    {
        const email = faker.internet.email();
        const username = generateRandomName();
        const phoneNumber = getRandomNumber();
        
        landingPage.navigate();
        landingPage.clickSignUpButton();
        registrationPage.username().type(username);
        registrationPage.email().type(email);
        registrationPage.enterPassword();
        registrationPage.enterDay();
        registrationPage.enterMonth();
        registrationPage.enterYear();
        registrationPage.phoneNumber().type(phoneNumber);
        registrationPage.clickAgreementBox();
        registrationPage.clickRegisterButton();
        registrationPage.verifyUrlTitle();

    })

    it('Verify users can successfully search using valid query', function()
    {
        landingPage.navigate();
        casinoPage.clickCasinoButton();
        casinoPage.clickSearchButton();
        casinoPage.enterValidSearchData();
        casinoPage.verifySearchResult();
    })

    it('Verify users can successfully search using invalid query', function()
    {
        landingPage.navigate();
        casinoPage.clickCasinoButton();
        casinoPage.clickSearchButton();
        casinoPage.enterInvalidSearchData();
        casinoPage.verifyInvalidSearchResult();
    })
})