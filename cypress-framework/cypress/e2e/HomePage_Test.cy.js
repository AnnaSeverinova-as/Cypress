/// <reference types="Cypress" />

import HomePage from "./pages/Home-Page"
const homePage = new HomePage;

describe('Open and check Home Page', () => {
  
  it('Check that text on the Home Page is displyed', () => {
    homePage.visit()
    homePage.getHeaderOfHomePage()
    homePage.getWhoAreWeText()
    homePage.getContentInsideWhoAreWe()
    homePage.getTitileWhyChooseUs()
    homePage.getContentInsideWhyChooseUs()
    homePage.getTitleGreatService()
    homePage.getContentInsideGreatService()
    homePage.getTitleExcellentCustomerService()
    homePage.getContentInsideExcellentCustomerService()
  })

  it('Check the Find Out More button', () => {
    homePage.visit()
    homePage.getFindOutMoreButton() 
  })

  it('Check the Alert', () => {
    homePage.visit()
    homePage.getFindOutMoreButton()
    homePage.getFindOutMoreButtonAlert()
    homePage.getFindOutMoreButton()
    homePage.getCloseButtonAlert()
    homePage.getTitleWelcomeToAlert()
    homePage.getContentInsideAlertWelcomeTo()
  })

  it('Check the grades in Great Service and Excellent Customer Service form', () => {
    homePage.visit()
    homePage.getGrades()
    homePage.getGradesSum()

   
  })


  it('Check Carousel', () => {
    homePage.visit()
    homePage.getLeftCarouselButton()
    homePage.visit()
    homePage.getRightCarouselButton()
    homePage.getCarouselIndicators()
    homePage.getCarouselImage()
    

   
  })

  it('Check Tabs', () => {
    homePage.visit()
    homePage.getClickOnOurProductTab()
    homePage.visit()
    homePage.getContactUsTab()
  })
})
