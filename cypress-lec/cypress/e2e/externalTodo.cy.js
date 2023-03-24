describe("Example Todo from cypres example", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("Test input box is present in DOM", () => {
    cy.get("input").should("exist");
  });
  it("Should be able to type in input box", () => {
    cy.get("input.new-todo").type("Learn Cypress");
  });
  it("Should add new todo on pressing enter", () => {
    cy.get("input.new-todo").type("Learn Cypress {enter}");
  });
  it("Should add the new todo to the list ", () => {
    cy.get("ul.todo-list").children().should("have.length", 2);
    cy.get("input.new-todo").type("Learn Cypress {enter}");
    cy.get("ul.todo-list").children().should("have.length", 3);
  });
  it("Delete button works as well", () => {
    cy.get("ul.todo-list").children().should("have.length", 2);
    cy.get(".destroy").eq(0).click({ force: true });
    cy.get("ul.todo-list").children().should("have.length", 1);
  });
});
