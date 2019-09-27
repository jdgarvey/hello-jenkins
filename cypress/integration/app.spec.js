describe('App', () => {
  it('should start up', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello World');
  });
});
