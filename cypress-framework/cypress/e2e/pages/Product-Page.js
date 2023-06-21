


class ProductPage {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html');

    }
    getSpecialOffersClick(){
        return cy.get('#container-special-offers').contains('Special Offers').click().should('be.visible')
    }

    getCamerasClick(){
        return cy.get('#container-product1').contains('Cameras').click().should('be.visible')
    }

    getNewLaptopsClick(){
        return cy.get('#container-product2').contains('New Laptops').click().should('be.visible')
    }

    getUsedLaptopsClick(){
        return cy.get('#container-product3').contains('Used Laptops').click().should('be.visible')
    }

    getGameConsolesClick(){
        return cy.get('#container-product4').contains('Game Consoles').click().should('be.visible')
    }

    getComponentsClick(){
        return cy.get('#container-product5').contains('Components').click().should('be.visible')
    }

    getDesktopSystemsClick(){
        return cy.get('#container-product6').contains('Desktop Systems').click().should('be.visible')
    }

    getAudioClick(){
        return cy.get('#container-product7').contains('Audio').click().should('be.visible')
    }


    getSpesialOffersImg(){
        return cy.get('#amp-img').should('be.visible')
    }

    getCameraImg(){
        return cy.get('#camera-img').should('be.visible')
    }

    getNewLaptopsImg(){
        return cy.get('#laptop1').should('be.visible')
    }
    getUsedLaptopsImg(){
        return cy.get('#laptop2').should('be.visible')
    }

    getGameConsoleImg(){
        return cy.get('#nintendo').should('be.visible')
    }

    getComponentsImg(){
        return cy.get('#graphic-card').should('be.visible')
    }

    getDesktopSystemImg(){
        return cy.get('#computer').should('be.visible')
    }

    getAudioImg(){
        return cy.get('#boombox').should('be.visible')
    }
    
    getSpecialOffersAlert(){
        return cy.get('.modal-content').should('be.visible')
    }

    getSpecialOffersAlertProceedButton(){
        return cy.get('.btn').contains('Proceed').click().should('be.visible')
    }

    getSpecialOffersAlertCloseButton(){
        return cy.get('.btn').contains('Close').click().should('exist')
    }

    getCamerasAlert(){
        return cy.get('.modal-content').should('be.visible')
    }

    getCamerasAlertProceedButton(){
        return cy.get('.btn').contains('Proceed').click().should('be.visible')
    }

    getCamerasAlertCloseButton(){
        return cy.get('.btn').contains('Close').click().should('exist')
    }

    getNewLaptopsAlert(){
        return cy.get('.modal-content').should('be.visible')
    }

    getNewLaptopsAlertProceedButton(){
        return cy.get('.btn').contains('Proceed').click().should('exist')
    }

    getNewLaptopsAlertCloseButton(){
        return cy.get('.btn').contains('Close').click().should('exist')
}

getUsedLaptopAlert(){
    return cy.get('.modal-content').should('be.visible')
}

getUsedLaptopAlertProceedButton(){
    return cy.get('.btn').contains('Proceed').click().should('be.visible')
}

getUsedLaptopAlertCloseButton(){
    return cy.get('.btn').contains('Close').click().should('exist')
}
}
export default ProductPage;