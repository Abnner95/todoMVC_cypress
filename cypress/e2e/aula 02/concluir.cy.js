
import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('Concluir itens na lista de ToDo', () => {
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
     
     it('Concluir item na lista check', () => {
        telaInicial.concluirItem()
         
     });

});