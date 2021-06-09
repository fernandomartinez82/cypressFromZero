  it('Verify Login msg validation', () => {
	cy.visit("https://www.shapermint.com/account/login")
	cy.get('#username').type("modofam271@flmcat.com"); //you can randomize the email to avoid captcha
	cy.get('#CustomerPassword').type("Zxcvb12345");
	cy.get('.mg-both > .btn').click();
	
	cy.get('.user_name').contains('Welcome, test').should('be.visible');
  })