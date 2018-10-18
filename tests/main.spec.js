import chai, { expect } from 'chai';
import sinon from 'sinon'
import sinonCha from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

chai.use(sinonCha)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { search, searchAlbuns, searchArtists, searchTracks, searchPlaylists } from '../src/main'

describe('Main', () => {

    const api = 'https://api.spotify.com/v1/search?q='

    describe('smoke tests', () => {
        
        it('should exist the search method', () => {
            expect(search).to.exist
        })

        it('should exist the search method', () => {
            expect(searchAlbuns).to.exist
        })     

        it('should exist the search method', () => {
            expect(searchArtists).to.exist
        })

        it('should exist the search method', () => {
            expect(searchTracks).to.exist
        })        

        it('should exist the search method', () => {
            expect(searchPlaylists).to.exist
        })        

    })

    describe('Generic Search', () => {
        
        let fetchdStub

        beforeEach( () => {
            fetchdStub = sinon.stub(global, 'fetch')
        })

        afterEach( () => {
            fetchdStub.restore()
        })

        it('should call fetch function', () => {

            const artists = search()

            expect(fetchdStub).to.have.been.calledOnce;
            
        })

        it('should receive the correct url to fetch', () => {

            context('passing one type', () => {
                
                const artistName = 'Incubus'                
                const artists = search(artistName, 'artist')
                const albuns = search( artistName, 'album') 

                expect(fetchdStub).to.have.been.calledWith(`${api}${artistName}&type=artist`)   

                expect(fetchdStub).to.have.been.calledWith(`${api}${artistName}&type=album`)
                
            })

            context('passing more then one type', () => {

                const artistAndAlbuns = search('Incubus', ['artist', 'album'])

                expect(fetchdStub).to.have.been.calledWith(`${api}Incubus&type=artist,album`)
            })
        })

    })

});
