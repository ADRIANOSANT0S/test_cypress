/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
  })

  it('Deve levar o usuário até a página de inscrição', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input').should('have.length', 7)

    // Tira print da tela
    cy.screenshot('tela-inscricao')
  })
  
  it('Deve preencher o formulário de inscrição', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input[name="nome-completo"]').type('Obrigado Jeová')
    cy.get('input[name="email"]').type('studyingnr1@gmail.com')
    cy.get('input[name="telefone"]').type('11978654321')
    cy.get('input[name="endereco"]').type('Rua Sucesso, bairro Exaltara a Deus a cima de todas as coisa, São Paulo-SP')
    
    // Selecionando um elemento do type read e checkbox
    cy.get('#linux').check()
  
    //seleciona um campo do typo select
    cy.get('select[name="escolaridade"]').select('outros')
    cy.get('.Aplicacao_button__tw2AE').click()

    cy.on('window:alert', (conteudo) => {
      expect(conteudo).contain('Obrigado pela candidatura!')
    })

    cy.screenshot('Tela-inscricao-preenchimento')
  })
})