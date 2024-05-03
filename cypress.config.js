const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  /* Cria um relatório HTML com Cypress
   * npm install --save-dev mochawesome plugin para gerar relatório 
  
   * Configura o plugin
  */

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true,
    html: true, 
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});

// para executar
// npm run cypress run --reporter mochawesome
