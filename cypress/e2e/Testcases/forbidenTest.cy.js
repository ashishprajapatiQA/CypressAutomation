//<reference type="cypress" />

describe('UserLove Test', () => {

  
    it('Verify Login functionality should return 403 status code when opening a webpage', () => {

        //const dayjs = require('dayjs')
        //cy.xpath('//*[@id=":r1:"]').type(dayjs().format('DD/MM/YYYY'));

        cy.visit('https://userlove.io/login')
        cy.url().should('include', 'userlove')
        cy.title().should('eq', 'Userlove | Sign In')
        cy.wait(4000)

        cy.xpath('//*[@id=":r0:"]').should('be.visible').should('be.enabled').type('p0p17n@amik.pro');
        cy.xpath('//*[@id=":r1:"]').should('be.visible').should('be.enabled').type('Test@123');
        cy.get('.gs-primary-button').should('be.visible').should('be.enabled').click();

        cy.wait(10000)
           
        const url = 'https://pop.userlove.io/dashboard';


        const graphqlEndpoint = 'https://api.userlove.io/api/on-boarding/graphql';
        const graphqlEndpointadmin = 'https://api.userlove.io/api/admin/graphql';

        // Intercept all POST requests to the GraphQL endpoint
        cy.intercept('POST', graphqlEndpoint).as('graphqlRequest');
        cy.intercept('POST', graphqlEndpointadmin).as('graphqlRequestadmin');



       
        // Visit the URL which triggers the GraphQL requests        
        cy.visit(url);
      //  cy.wait(10000);

        // Wait for and verify all intercepted GraphQL POST requests
        cy.wait('@graphqlRequest').then((interception) => {
            // Check if the status code is 403
            if (interception.response.statusCode === 403) {
                // Assert that the status code is 403            
                expect(interception.response.statusCode).to.equal(403);
                cy.log('The status code is 403 as expected.');
            } else {
                // Log an error message if the status code is not 403
                cy.log(`Unexpected status code: ${interception.response.statusCode}`);
                throw new Error(`Expected status code 403 but got ${interception.response.statusCode}`);
            }
        });

        cy.wait('@graphqlRequestadmin').then((interception) => {
            // Check if the status code is 403
            if (interception.response.statusCode === 403) {
                // Assert that the status code is 403            
                expect(interception.response.statusCode).to.equal(403);
                cy.log('The status code is 403 as expected.');
            } else {
                // Log an error message if the status code is not 403
                cy.log(`Unexpected status code: ${interception.response.statusCode}`);
                throw new Error(`Expected status code 403 but got ${interception.response.statusCode}`);
            }
        });
    

    });

});