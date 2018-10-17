/*
Desafio FizzBuzz
Se o numero for divisivel por 3, no lugar do numero escrevo 'Fizz'
Se o numero for divisivel por 5, no lugar do numero escrevo 'Buzz'
Se o numero for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz'
Se não for multiplo de nada, retorna o numero
*/

import { expect } from 'chai'
import FizzBuzz from '../src/buzz'

describe('Main', () => {

    it('Should return "Fizz" when multiple of 3 ', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz')
        expect(FizzBuzz(6)).to.be.equal('Fizz')
    })

    it('Should return "Buzz" when multiple of 5 ', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz')        
    })   

    it('Should return "FizzBuzz" when multiple 3 and 5 ', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz')        
    })   

    it('Should return the number when non-multiple ', () => {
        expect(FizzBuzz(7)).to.be.equal(7)        
    })  

    it('Should return 0 when 0 ', () => {
        expect(FizzBuzz(0)).to.be.equal(0)
    })
    
})