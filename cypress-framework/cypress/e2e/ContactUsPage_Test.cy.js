/// <reference types="Cypress" />

import { users } from "../test-data/users-test-data";
import ContactUsPage from "./pages/Contact-Us-Page";


const contactUsPage = new ContactUsPage();

const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];


  
  



describe('Contact US form', () => {

  
    it(`Open and fill in the Contact US form - with test case name ${userWithValidData.testName}`, () => {
      contactUsPage.visit();
      contactUsPage.fillContactUsForm(userWithValidData);
      
     //add assertion
     contactUsPage.getSucsessSubmitMessage().should('exist');//should - вызов assertion (запись об успешной отправке существует)
     contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
     contactUsPage.getInvalidEmailError().should('not.exist');
    })

  
      it(`Open and fill in the Contact US form - with test case name ${userEmptyEmail.testName}`, () => {
        contactUsPage.visit();
        contactUsPage.fillContactUsForm(userEmptyEmail);
      contactUsPage.getAllFieldsAreRequiredError().should('exist');
      contactUsPage.getInvalidEmailError().should('exist');
        
      })
  

      it(`Open and fill in the Contact US form - with test case name ${userEmptyFirstName.testName}`, () => {
        contactUsPage.visit();
        contactUsPage.fillContactUsForm(userEmptyFirstName)
        contactUsPage.getAllFieldsAreRequiredError().should('exist');
        contactUsPage.getInvalidEmailError().should('not.exist');
      })

      it.only('Open and fill in the Contact US form - with test case name', () => {
        contactUsPage.visit();
       contactUsPage.getSubmitButton()
      })

})