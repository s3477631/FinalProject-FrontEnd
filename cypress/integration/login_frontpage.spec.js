describe('Log-in', function() {
    it('enter username', function() {
      cy.visit("http://localhost:3000")
      cy.get("[data-cy=username]").type("manager");
      cy.get("[data-cy=password]").type("welcome");
      cy.get("[data-cy=loginButton").click();
      cy.url().should("include", "/upload");
    })
  })
  