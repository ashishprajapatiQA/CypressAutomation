describe('UserLove Test', () => {

  it('Verify Login functionality', () => {

    //const dayjs = require('dayjs')
    //cy.xpath('//*[@id=":r1:"]').type(dayjs().format('DD/MM/YYYY'));

    cy.visit('https://userlove.io/login')
    cy.title().should('eq', 'Userlove | Sign In')
    cy.wait(4000)


    cy.xpath('//*[@id=":r0:"]').type('lopeduru@clout.wiki');
    cy.xpath('//*[@id=":r1:"]').type('Test@123');
    cy.get('.gs-primary-button').click();
    cy.wait(5000);

    cy.contains('Bounce rate').scrollIntoView({ duration: 4000 });   // scroll smoothly      
    cy.wait(3000);
    cy.log('created tour')
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[2]').click();    
    
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[3]').click();
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[4]').click();
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[5]').click();
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[6]').click();
    cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/div/a[7]').click();
  })





})