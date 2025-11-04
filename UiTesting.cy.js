describe('UI Testing Playground - Beginner Cypress Tests', () => {

  it('should open the home page', () => {
    cy.visit('/');
    cy.title().should('include', 'UI Test Automation');
  });

  it('should click the button with dynamic ID', () => {
    cy.visit('/dynamicid');
    cy.get('button.btn-primary').click();
  });

  it('should click the blue button with class attribute', () => {
    cy.visit('/classattr');
    cy.get('.btn-primary').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Primary button pressed');
    });
  });

  it('should click the green button (Hidden Layers)', () => {
    cy.visit('/hiddenlayers');
    cy.get('#greenButton').click();
  });

  it('should wait for AJAX data to appear', () => {
    cy.visit('/ajax');
    cy.get('#ajaxButton').click();
    cy.get('#content > p', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Data loaded with AJAX get request.');
  });

  it('should wait for client side delay message', () => {
    cy.visit('/clientdelay');
    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 10000 })
      .should('contain.text', 'Data calculated on the client side.');
  });
});
