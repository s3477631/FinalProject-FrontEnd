describe('Manager Nav-bar testing', function() {
    it('click buttons across nav-bar', function() {
      cy.request("http://localhost:3000/view")
      cy.get("[data-cy=navuploadbutton]").click()
      cy.get("[data-cy=navstatsbutton]").click()
      cy.get("[data-cy=navviewbutton]").click()
      cy.get('[data-cy=floatdatepicker]').invoke('val').then((text) => {
        expect("").to.equal(text);
      cy.get("[data-cy=logoutbutton]").click()
    });
    })
  })
  