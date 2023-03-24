describe("Counter Application Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Check if counter renders correctly", () => {
    cy.visit("http://localhost:3000");
  });

  it("Check counter is present", () => {
    cy.get("h2").should("exist");
  });

  it("Check counter add button is present", () => {
    cy.get(".counter-add-button").should("exist");
  });

  it("Check counter add button is present", () => {
    cy.get("button.counter-reduce-button").should("exist");
  });

  it("Counter value should be 0", () => {
    cy.get("[data-testid=counter]").should("have.text", "Counter:0");
  });

  it("Add button works as expected", () => {
    cy.get("button.counter-add-button").click();
    cy.get("[data-testid=counter]").should("have.text", "Counter:1");
  });

  it("Reduce button works as expected", () => {
    cy.get("button.counter-reduce-button").click();
    cy.get("[data-testid=counter]").should("have.text", "Counter:-1");
    cy.get("button.counter-reduce-button").click();
    cy.get("[data-testid=counter]").should("have.text", "Counter:-2");
  });
});
