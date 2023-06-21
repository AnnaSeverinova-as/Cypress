/// <reference types="Cypress" />

import ProductPage from "./pages/Product-Page";
const productPage = new ProductPage;

describe('Open and check Our Products Page', () => {

  it('Check that the links on Our Product Page are clickable', () => {
   productPage.visit()
   productPage.getSpecialOffersClick()
   productPage.visit()
   productPage.getCamerasClick()
   productPage.visit()
   productPage.getNewLaptopsClick()
   productPage.visit()
   productPage.getUsedLaptopsClick()
   productPage.visit()
   productPage.getGameConsolesClick()
   productPage.visit()
   productPage.getComponentsClick()
   productPage.visit()
   productPage.getDesktopSystemsClick()
   productPage.visit()
   productPage.getAudioClick()
  })

  
  it('Check that the products on Our Product Page are displayed', () => {
    productPage.visit()
    productPage.getSpesialOffersImg()
    productPage.getCameraImg()
    productPage.getNewLaptopsImg()
    productPage.getUsedLaptopsImg()
    productPage.getGameConsoleImg()
    productPage.getComponentsImg()
    productPage.getDesktopSystemImg()
    productPage.getAudioImg()

   })



   it('Check Special Offers block', () => {
    productPage.visit()
    productPage.getSpesialOffersImg()
    productPage.getSpecialOffersClick()
    productPage.getSpecialOffersAlert()
    productPage.getSpecialOffersAlertProceedButton()
    productPage.getSpecialOffersClick()
    productPage.getSpecialOffersAlertCloseButton()
   })

   it('Check Cameras block', () => {
    productPage.visit()
    productPage.getCameraImg()
    productPage.getCamerasClick()
    productPage.getCamerasAlert()
    productPage.getCamerasAlertProceedButton()
    productPage.getCamerasClick()
    productPage.getCamerasAlertCloseButton()
   })

   it('Check New Laptop block', () => {
    productPage.visit()
    productPage.getNewLaptopsImg()
    productPage.getNewLaptopsClick()
    productPage.getNewLaptopsAlert()
    productPage.getNewLaptopsAlertProceedButton()
    productPage.getNewLaptopsClick()
    productPage.getNewLaptopsAlertCloseButton()
   })

   it.only('Check Used Laptop block', () => {
    productPage.visit()
    productPage.getUsedLaptopsImg()
    productPage.getUsedLaptopsClick()
    productPage.getUsedLaptopAlert()
    productPage.getUsedLaptopAlertProceedButton()
    productPage.getUsedLaptopsClick()
    productPage.getUsedLaptopAlertCloseButton()
   })

   it.only('Check Used Laptop block', () => {
    productPage.visit()
    productPage.getUsedLaptopsImg()
    productPage.getUsedLaptopsClick()
    productPage.getUsedLaptopAlert()
    productPage.getUsedLaptopAlertProceedButton()
    productPage.getUsedLaptopsClick()
    productPage.getUsedLaptopAlertCloseButton()
   })

 })
