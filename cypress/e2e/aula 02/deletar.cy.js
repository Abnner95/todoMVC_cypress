
import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('Deletar itens da lista', () => {
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
        

     })

    /*
    * clicar no filtro
    * o item ser exibido
    * e o contador deve bater a informção
    */
     it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
     });


});