import cypress from 'cypress';

/* Mapeando onde a classe pode ser chamada */
const elem = require('../elements/tela-inicial.elements').ELEMENTS;

class telaInicial {
  inputText() {
    cy.get(elem.inputToDo).should('be.visible').click();  // Verifica a visibilidade antes de clicar
    cy.get(elem.inputToDo).type("Abner Rodrigues");  // Digita o nome no campo
  }
}

export default new telaInicial();  // Exporta uma instância da classe