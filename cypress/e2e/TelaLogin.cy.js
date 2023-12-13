/* eslint-disable no-undef */
describe('Testa a tela Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('testar se o input e o botão estão na tela', () => {
    cy.getByData('login-name-input').should('exist');
    cy.getByData('login-submit-button').should('exist');
  });

  it('testa se é encaminhado para a tela de \'Home\' após o login', () => {
    cy.getByData('login-name-input').type('Bruna');
    cy.getByData('login-submit-button').click();
    cy.url().should('include', '/search');
  });
})