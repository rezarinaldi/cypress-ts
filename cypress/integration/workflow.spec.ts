describe("workflow", () => {
  before(() => {
    cy.clearCookie("token");
    cy.visit("/");
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("token");
  });

  it("can fill register form", () => {
    cy.contains("Don't have account ? create one").click();

    cy.contains("Username").click().type("reza");
    cy.contains("Password").click().type("reza");
    cy.contains("Password Confirmation").click().type("reza");

    cy.contains("Already have account ? login now").click();
  });

  it("can login to system", () => {
    cy.contains("Username").click().type("siapa");
    cy.contains("Password").click().type("siapa");
    cy.contains("Login Now").click();
    cy.contains("Show your project list");
  });

  it("can create new project", () => {
    cy.contains("Create New Project").click();
    cy.get('[placeholder="Awesome App"]').type("test project");
    cy.contains("Create Project Now").click();
    cy.contains("Show your project list");
  });

  it("can edit project", () => {
    cy.get('[title="Edit Project"]').click();
    cy.get('[placeholder="Awesome App"]').clear().type("edited test project");
    cy.contains("Edit Project Now").click();
    cy.contains("Show your project list");
  });

  it("can select project", () => {
    cy.contains("edited test project").click({ force: true });
  });

  it("can back to project list by clicking logo", () => {
    cy.contains("Code Send").click();
    cy.contains("Show your project list");
  });

  it("can delete project", () => {
    cy.get('[title="Delete Project"]').click();
    cy.contains("Yes").click();
  });

  it("can logout from system", () => {
    cy.contains("Logout").click({ force: true });
  });
});
