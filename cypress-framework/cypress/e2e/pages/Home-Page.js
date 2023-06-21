

class HomePage {
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');

    }
getHeaderOfHomePage(){
    return cy.get('#nav-title').contains('WebdriverUniversity.com (Page Object Model)').should('exist')
}

    getWhoAreWeText(){
        return cy.get('.sub-heading').contains('Who Are We?').should('exist')
    }

    getContentInsideWhoAreWe(){
        return cy.get('.caption').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.').should('exist')
    }

    getFindOutMoreButton(){
        return cy.get('#button-find-out-more').contains('Find Out More!').click()
    }

    getFindOutMoreButtonAlert(){
        return cy.get('.modal-content').contains('Find Out More').click()
    }

    getCloseButtonAlert(){
        return cy.get('.modal-content').contains('Close').click()
    }


    getTitleWelcomeToAlert(){
        return cy.get('.modal-title').contains('Welcome to ').should('exist')
    }

    getContentInsideAlertWelcomeTo(){
        return cy.get('.modal-body').contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...').should('exist')
    }

    getTitileWhyChooseUs(){
        return cy.get('.sub-heading').contains('Why Choose Us?').should('exist')
    }

    getContentInsideWhyChooseUs(){
        return cy.get('.caption').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.').should('exist')
    }

    getTitleGreatService(){
        return cy.get('.sub-heading').contains('GREAT SERVICE!').should('exist')
    }

    getContentInsideGreatService(){
        return cy.get('.caption').find('p').eq(1).contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. ').should('exist')
}

    getTitleExcellentCustomerService(){
        return cy.get('.sub-heading').contains('Excellent Customer Service!').should('exist')
   }

   getContentInsideExcellentCustomerService(){
    return cy.get('.caption').find('p').eq(3).contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. ').should('exist')
   }

   getGrades(){
    return cy.get('.div-star').find('span').should('be.visible')
   }

   getGradesSum(){
    return cy.get('.div-star').find('span').should('have.length', '10')
   }


   getLeftCarouselButton(){
    return cy.get('.left').should('have.class', 'carousel-control').click()
   }

   getRightCarouselButton(){
    return cy.get('.right').should('have.class', 'carousel-control').click()
   }

   getCarouselIndicators(){
    return cy.get('.carousel-indicators').should('be.visible')
   }

   getCarouselImage(){
    return cy.get('.slide-image').should('be.visible')
   }

   getClickOnOurProductTab(){
    return cy.get('[href="products.html"]').should('have.text', 'Our Products').click()
   }

   getContactUsTab(){
    return cy.get('[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us').click()
   }
}


export default HomePage;