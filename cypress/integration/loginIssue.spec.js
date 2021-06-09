  it('Verify Login msg validation', () => {
	cy.visit("https://www.shapermint.com/account/login")
	cy.get('#username').type("mailx@mail.com"); //you can randomize the email to avoid captcha
	cy.get('#CustomerPassword').type("invalidPsw");
	cy.get('.mg-both > .btn').click();
	cy.get('.html_li').invoke('text').should('eq', "Incorrect email or password.");
  })