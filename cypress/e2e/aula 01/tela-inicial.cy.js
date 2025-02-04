/*
* feature -> describe
* bg -> contexto ou beforeEach
* caso de teste -> it
*/

// Importando a classe da página
import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('acess page todoMVC', () => {
  it('open the site', () => {
   // cy.visit('https://todomvc.com/examples/react/dist/');  // Acessa o site
    telaInicial.inputText();  // Chama o método inputText
  })
})