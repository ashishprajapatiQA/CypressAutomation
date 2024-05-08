///<><reference type="cypress" /><reference type="cypress/xpath" /></>

describe('UserLove Test', () => {

  it('Verify Login functionality', () => {

    //const dayjs = require('dayjs')
    //cy.xpath('//*[@id=":r1:"]').type(dayjs().format('DD/MM/YYYY'));

    cy.visit('https://userlove.io/login')
    cy.url().should('include','userlove')
    cy.title().should('eq', 'Userlove | Sign In')
    cy.wait(4000)

    cy.xpath('//*[@id=":r0:"]').should('be.visible').should('be.enabled').type('silokafi@pelagius.net');
    cy.xpath('//*[@id=":r1:"]').should('be.visible').should('be.enabled').type('Test@123');
    cy.get('.gs-primary-button').should('be.visible').should('be.enabled').click();
    cy.wait(5000);

    //Dashboard
    cy.contains('Bounce rate').scrollIntoView({ duration: 4000 });   // scroll smoothly      
    cy.wait(3000);


    // Setting
    cy.xpath('/html/body/div/div/div[1]/div[2]/button[2]/div[2]').should('be.visible').click(); cy.wait(2000); 
    // profile
    cy.xpath('/html/body/div[2]/div[3]/div/div[5]/button').should('be.visible').click();
    cy.title().should('eq', 'Userlove | Profile');
    cy.wait(2000); 
   
    // Security
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[2]').should('be.visible').click();
    cy.wait(2000);cy.title().should('eq', 'Userlove | Security'); cy.wait(2000); 
   
     // installation
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[3]').should('be.visible').click(); 
    cy.wait(2000);cy.title().should('eq', 'Userlove | Installation');
    cy.wait(2000);
   
    //Attribiute
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[4]').should('be.visible').click(); 
    cy.wait(2000);cy.title().should('eq', 'Userlove | Attributes');
    cy.wait(2000); 
   
    //company Details
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[5]').should('be.visible').click();
    cy.wait(2000);cy.title().should('eq', 'Userlove | Company Details');
    cy.wait(2000); 
   
    //manage domain 
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[6]').should('be.visible').click();
    cy.wait(2000);
    cy.title().should('eq', 'Userlove | Manage domain');
    cy.wait(2000);
   
    // team 
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[7]').should('be.visible').click();
    cy.wait(2000);
    cy.title().should('eq', 'Userlove | Team Users');
    cy.wait(2000);
   
    // role&permission
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[8]').should('be.visible').click();
    cy.wait(2000);
    cy.title().should('eq', 'Userlove | Role and Permission');
    cy.wait(2000); 
   
    //billing
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/a[9]').should('be.visible').click();
    cy.wait(2000);
    cy.title().should('eq', 'Userlove | Billings & Plans');
    cy.wait(2000);

    
    //Tour
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[2]').should('be.visible').click();
    cy.get('.ContentWrapper_gs-content-wrapper-container-children__Qh5L1').scrollIntoView({ duration: 4000 });
    cy.wait(2000);

    //Checklist
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[3]').should('be.visible').click();
    cy.wait(2000);
    //Survey
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[4]').should('be.visible').click();
    cy.wait(2000);
    //DemoX
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[5]').should('be.visible').click();
    cy.wait(2000);
    //Users
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[6]').should('be.visible').click();
    cy.wait(2000);
    //Event
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[7]').should('be.visible').click();
    cy.wait(2000);
    //Theme
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[8]').should('be.visible').click();
    cy.wait(2000);

  })
})