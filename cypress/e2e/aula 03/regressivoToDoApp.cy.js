

import telaInicial from "../../support/pageObjects/tela-inicial.pageObject"

describe('Teste Regressivo ToDo App', () => {
    
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        });
    });

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })
             it('Adicionar mais de um item a lista', () => {
                 
                //variavel com itens diversos
                var TodoItens = ["Maça", "Laranja", "Cenoura"]
                
                //looping
                TodoItens.forEach(function(item, indice, array){
                    telaInicial.inputText(item)

             })
             /*validar aque o contador é igual a 3 */
             telaInicial.validarContador()
                        
        });
                
        });
        
    });

    context('Validar a conclusão de itens', () => {
           beforeEach(()=>{
            cy.visit('/')
              //variavel com itens diversos
              var TodoItens = ["Maça", "Laranja", "Cenoura"]
                
              //looping
              TodoItens.forEach(function(item, indice, array){
                  telaInicial.inputText(item)      
                });
             })
             
             it('Concluir item na lista check', () => {
                telaInicial.concluirItem()
                
                 
             });
    });

    context('Validar o filtro da aplicação', () => {
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
             it('Validar a lista de itens ativos', () => {
                telaInicial.filtroItem("Active")
                telaInicial.validarSizeTodo(2)
             });

             it('validar a lista de itens concluidos', () => {
                telaInicial.filtroItem("Completed")
                telaInicial.validarSizeTodo(1) 

             });


    });

    context('Validar a remoção de itens', () => {
   beforeEach(()=>{
    cy.visit('/')
      //variavel com itens diversos
      var TodoItens = ["Maça", "Laranja", "Cenoura"]
        
      //looping
      TodoItens.forEach(function(item, indice, array){
          telaInicial.inputText(item)      
        })
        

     })

     it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
        telaInicial.validarSizeTodo(2) 
     });
    });



