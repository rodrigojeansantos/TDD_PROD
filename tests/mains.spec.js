/*describe: Inicia o teste. Descrever os detalhes de um certo arquivo, função... */
/* context: Separar casos de testes. Posso ter vários testes com casos diferentes. */
/* it: rodar o comando do teste. Todo it quando falha lança um erro */
/*Seguir essa estrutura para encontrar onde deu problema... */
/* only para rodar apenas aquele pedaço */
/* skip: pula o teste, uso só no it */

describe('Main', () => {

    describe('Metodo A', () => {
        
        context('Case 1', () => {
        //context.only('Case 1', () => {        
            //it('Deveria acontecer tal coisa....', () => {
            it.skip('Deveria acontecer tal coisa....', () => {
                //spero que aconteça algo
                //Entrada de ados sum(2,2)
                //Esperar retornar true ok, false broken
                throw new Error('Erroooo')
            })
        })

        context('Case 2', () => {
            it('Estou no case 2', () => {
                //throw new Error('Erroooo')
            })            
        })   

    })

    describe('Metodo B', () => {
       
    })

})