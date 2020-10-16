describe("I open Darul Mutaallimin login page", function () {
  it("Log In", function () {
    cy.visit(
      "https://darulmutaallimin.com/wp-login.php?redirect_to=https%3A%2F%2Fdarulmutaallimin.com%2F&bp-auth=1&action=bpnoaccess"
    );
    cy.get('input[type="text"]').type("rez4rinaldi");
    cy.get('input[type="password"]').type("katanya304");
    cy.get('input[type="submit"]')
      .contains("Log In")
      .should("be.visible")
      .click();
  });
});
