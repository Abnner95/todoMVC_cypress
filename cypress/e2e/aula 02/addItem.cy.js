
import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('Adicionar itens na minha lista de ToDo', () => {
    /* 
    * DADO - BEFORE - VAI RODAR ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - VAI RODAR ANTES DE CADA TESTE
    */
   beforeEach(()=>{
    cy.visit('/')
   })


     it.skip('Adicionar um item a lista', () => {
       telaInicial.inputText("dado1");// Chama o método inputText Tela-inicial.pageObject
     }) 

     it('Adicionar mais de um item a lista', () => {
         
        //variavel com itens diversos
        var TodoItens = ["Maça", "Laranja", "Cenoura"]
        
        //looping
        TodoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
     });
     
});