describe('React App', () => {
  it('opens and has a title', () => {
    cy.visit('http://localhost:3000/');
    cy.get('p').contains('Hello World!');
  });
});