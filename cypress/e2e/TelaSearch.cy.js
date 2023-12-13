/* eslint-disable no-undef */
describe('Testar a tela Search', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.getByData('login-name-input').type('Bruna');
        cy.getByData('login-submit-button').click();
        cy.url().should('include', '/search');
        cy.wait(3000)
    })

    it('Testar se a tela esta sendo aberta', () => {
        
        cy.getByData('search-artist-input').should('exist');
        cy.getByData('search-artist-button').should('exist');
        cy.getByData('a-to-search').should('exist');
        cy.getByData('a-to-favorites').should('exist');
        cy.getByData('a-to-profile').should('exist');
        cy.getByData('header-user-name').should('exist').and('have.text', 'Bruna');
    })

    it('Testa se esta buscando o artista', () => {
        cy.getByData('search-artist-input').type('rbd');
        cy.getByData('search-artist-button').click();
        cy.wait(3000)
        cy.getByData('music-card').should('exist')
    })

    it('Testa se esta colocando o nome correto da busca', () => {
        cy.getByData('search-artist-input').type('rbd');
        cy.getByData('search-artist-button').click();
        cy.wait(3000)
        cy.getByData('artist-music').should('exist').and('have.text', 'Resultado de álbuns de rbd:');
    })
})