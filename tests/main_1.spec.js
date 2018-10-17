const log = console.log

let  expect = require('chai').expect

describe('Main', () => {

    var arr;

    //roda uma vez antes do bloco
    before(() => {
        //Inicia conexão bo banco
        //criar conjunto de dados
    })

    //Uma vez depois do bloco
    after(() => {
        //Fecha conexão no banco
        //apagar conjunto de dados
    })    

    //roda todas as vezes antes de cada bloco
    beforeEach(() => {
        arr = [1,2,3];
    })    

    //mesma coisa depois de cada bloco
    afterEach(() => {
        
    })      

    //smoke test
    it('should be an array', () => {
        expect(arr).to.be.a('array')
    })
  

    it('Should have a size of 4 when push another value to the array', () => {
        
        arr.push(4)
        expect(arr).to.have.lengthOf(4)
    })

    it('Should remove the value 3 when pop in the array', () => {        
        arr.pop()
        expect(arr).to.not.include(3)
    })

    it('should return true when pop 3 from the array', () =>{
        expect(arr.pop() === 3).to.be.true
    })
    
    it('Should have a size of 3 when pop a value from the array', () => { 
        arr.pop()               
        expect(arr).to.have.lengthOf(2)
    })    

})