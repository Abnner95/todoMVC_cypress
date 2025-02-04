
import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('Validar os filtros da aplicação apos a adição de itens', () => {
    /* 
    * DADO - BEFORE - VAI RODAR ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - VAI RODAR ANTES DE CADA TESTE
    */
   beforeEach(()=>{
    cy.visit('/')
      //variavel com itens diversos
      var TodoItens = ["Maça", "Laranja", "Cenoura"]
        
      //looping
      TodoItens.forEach(function(item, indice, array){
          telaInicial.inputText(item)      
        })
        telaInicial.concluirItem()

     })

    /*
    * clicar no filtro
    * o item ser exibido
    * e o contador deve bater a informção
    */
     it('Filtrar itens ativos', () => {
        telaInicial.filtroItem("Active")
     });

     it('Filtrar itens concluidos', () => {
        telaInicial.filtroItem("Completed")
         
     });

});