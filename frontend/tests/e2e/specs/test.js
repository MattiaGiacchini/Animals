// https://docs.cypress.io/api/table-of-contents

describe("Home test", () => {
  it("Visits the app home", () => {
    cy.visit("/");
    cy.contains("h2", "Welcome to Animals platform!");
  });
});

describe("Animals list", () => {
  it("Visits the animals list", () => {
    cy.get(".ui-header-link").contains("Animals").click();
    cy.url().should("include", "/animals");
    cy.get(".ui-animal-card");
  });
});

describe("View animal details", () => {
  it("Visits the animals details view", () => {
    cy.visit("/animals");
    cy.get(".ui-animal-card").first().click();
    cy.get(".ui-animal-details-card").contains("Last update");
  });
});

describe("Create and delete animal", () => {
  it("Create a new animal", () => {
    const fields = {
      0: "Puppy",
      1: "Dog",
      2: "Golden Retriever",
      3: "2023-03-28",
    };
    cy.visit("/animals");
    cy.get(".ui-button").contains("Create new").click();
    cy.get(".ui-input").each((input, index) => {
      cy.wrap(input).type(fields[index]);
    });
    cy.get(".ui-button").contains("Create").click();
    cy.url().should("include", "/animals");
    cy.get(".ui-animal-card")
      .first()
      .should("contain", "Puppy")
      .and("contain", "Dog")
      .and("contain", "Golden Retriever");
  });

  it("Delete the first animal of the list (the last created)", () => {
    cy.visit("/animals");
    cy.get(".ui-animal-card").first().click();
    cy.get(".ui-button").contains("Delete").click();
    cy.get(".ui-button").contains("Confirm").click();
  });
});

describe("Edit animal data", () => {
  it("Edits the animal details", () => {
    const fields = {
      0: "Puppy",
      1: "Dog",
      2: "Golden Retriever",
      3: "2023-03-28",
    };
    cy.visit("/animals");
    cy.get(".ui-button").contains("Create new").click();
    cy.get(".ui-input").each((input, index) => {
      cy.wrap(input).type(fields[index]);
    });
    cy.get(".ui-button").contains("Create").click();
    cy.url().should("include", "/animals");
    cy.get(".ui-animal-card").first().click();
    cy.get(".ui-button").contains("Edit").click();

    cy.get(".ui-switch").click();
    cy.get(".ui-button-pills-group").contains("Female").click();
    cy.get(".ui-input").eq(2).type(" - Black");

    cy.get(".ui-button").contains("Update").click();

    cy.get(".ui-animal-details-card")
      .first()
      .should("contain", "Puppy")
      .and("contain", "Dog")
      .and("contain", "Golden Retriever - Black")
      .and("contain", "Female");
  });
});
