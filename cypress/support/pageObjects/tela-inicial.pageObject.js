

/* Mapeando onde a classe pode ser chamada */
const elem = require('../elements/tela-inicial.elements').ELEMENTS;
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem= require('../elements/tela-inicial.elements').FILTROS


class telaInicial {
  inputText(dado) {
    cy.get(elem.inputToDo).type(dado).type('{enter}');  // Digita o nome no campo
  }

  validarInput(texto){
    cy.get(elem.inputToDo)
    .should('have.attr', 'placeholder')
    .should('include', texto)
  }

  concluirItem(){
    cy.get(concluirItem.btnConcluirItem)
    .last()
    .click()
    
  }
  filtroItem(menu){
    cy.get(filtroItem.filtroTodo)
    .contains(menu)
    .and('be.visible')
    .click()
  }
  deletarItem(){
    cy.get(concluirItem.listaItens)
    .first()
    .find('button')
    //invoke serve para invocar o button que esta escondido...
    .invoke('show')
    .click()
  }

  validarContador(numero){
    cy.get(filtroItem.contador)
    cy.get('.todo-count').contains('3 items left!').should('be.visible');

  }
validarSizeTodo(numero){
  cy.get(concluirItem.validarListaItens)
  .should('have.length',numero)
}



}

export default new telaInicial();  // Exporta uma instância da classe