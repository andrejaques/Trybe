const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const MovieModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();
  before(async () => {
    const urlMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(
      urlMock,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  
    sinon
      .stub(MongoClient, 'connect')
      .resolves(connectionMock);
  });
  
  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });
  
  describe('Quando não há nenhum filme cadastrado', () => {
    it('retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.an('array');
    });
    it('o array retornado é vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('Quando há filmes cadastrados no banco', () => {
    before(async () => {
      const db = connectionMock.db('model_example');
      await db.collection('movies').insertOne({
        title: 'Dune',
        releaseYear: 2021,
        directedBy: 'Dennis Villeneuve',
      });
    })

    after(async () => {});

    it('retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.an('array');
    });
    it('o array não está vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.not.empty;
    });
    it('o array contém itens to ipo object', async () => {
      const movies = await MovieModel.getAll();

      const [ item ] = movies;
      expect(item).to.be.an('object');
    });
    it('cada item do array tem id, title, releaseYear, directedBy', async () => {
      const movies = await MovieModel.getAll();

      const [ item ] = movies;
      expect(item).to.include.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });
  })
});