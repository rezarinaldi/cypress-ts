describe("I open Darul Mutaallimin login page", function () {
  it("Log In", function () {
    cy.visit("https://www.youtube.com/");
    cy.get('input[type="text"]').type("#jtipolinema").type("{enter}");
  });
});
