// Esse comando referência as funções do cypres para o auto complete
/// <reference types="cypress" />

describe('Teste para a home', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
  })

  it('Deve renderizar quatro vagas', () => {
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
  })

  it('Deve filtrar por fullstack', () => {    
    // Comando para escrever type('fullstack{enter}')
    cy.get('.FormVagas_campo__E1ppF').type('fullstack')
    cy.get('button[type="submit"]').click()
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    cy.screenshot('tela-vagas')
  })
})