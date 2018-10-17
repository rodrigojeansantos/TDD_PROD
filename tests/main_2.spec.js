//let expect = require('chai').expect
//let calc = require('../src/main.js')

import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main.js'


describe('Calc', () => {
    
    describe('Smoke test', () => {


        it('should exist the method sum', () => {
            expect(sum).to.exist
            expect(sum).to.be.a('function')
        })

        it('should exist the method sub', () => {
            expect(sub).to.exist
            expect(sub).to.be.a('function')
        })

        it('should exist the method mult', () => {
            expect(mult).to.exist
            expect(mult).to.be.a('function')
        })

        it('should exist the method div', () => {
            expect(div).to.exist
            expect(div).to.be.a('function')
        })        
    
    })

    describe('Sum', () => {
        it('should retur 4 when sum(2,2)', () => {
            expect(sum(2,2)).to.be.equal(4)
        })
    })
 
    describe('Sub', () => {
        it('should retur 4 when Sub(6,2)', () => {
            expect(sub(6,2)).to.be.equal(4)
        })
        it('should retur -4 when Sub(6,10)', () => {
            expect(sub(6,10)).to.be.equal(-4)
        })        
    })

    describe('Mult', () => {
        it('should retur 4 when Multi(2,2)', () => {
            expect(mult(2,2)).to.be.equal(4)
        })        
    })

    describe('Div', () => {
        it('should retur 2 when div(4,2)', () => {
            expect(div(4,2)).to.be.equal(2)
        })  
        it('should return not possible division per zero', () => {
            expect(div(4,0)).to.be.equal('Não é possivel dividir por 0')
        })          
    })

})