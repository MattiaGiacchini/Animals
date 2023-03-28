// https://docs.cypress.io/api/table-of-contents

describe("Home E2E test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Welcome to Animals platform!");
  });
});
