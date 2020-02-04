describe('Nav-bar testing', function() {
    it('enter username', function() {
      cy.visit("http://localhost:3000/view")
      cy.get("[data-cy=navuploadbutton]").click()
      cy.get("[data-cy=navstatsbutton]").click()
    })
  })
  