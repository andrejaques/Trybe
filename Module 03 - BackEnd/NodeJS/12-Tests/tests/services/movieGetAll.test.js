const sinon = require('sinon');
const { expect } = require('chai');
const MovieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('Busca todos os filmes do DB', () => {
  describe('Quando não há filmes cadastrados', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll').resolves([]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const movies = await movieService.getAll();

      expect(movies).to.be.an('array');
    });

    it('o array retornado é vazio', async () => {
      const movies = await movieService.getAll();

      expect(movies).to.be.empty;
    });
  });


  describe('Quando há filmes cadastrados no banco', () => {
    before(async () => {
      sinon.stub(MovieModel, 'getAll').resolves([
        {
          _id: '604cb554311d68f491ba5781',
          title: 'Dune',
          releaseYear: 2021,
          directedBy: 'Dennis Villeneuve',
        },
      ]);
    })

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const movies = await movieService.getAll();

      expect(movies).to.be.an('array');
    });
    it('o array não está vazio', async () => {
      const movies = await movieService.getAll();

      expect(movies).to.be.not.empty;
    });
    it('o array contém itens to ipo object', async () => {
      const movies = await movieService.getAll();

      const [ item ] = movies;
      expect(item).to.be.an('object');
    });
    it('cada item do array tem id, title, releaseYear, directedBy', async () => {
      const movies = await movieService.getAll();

      const [ item ] = movies;
      expect(item).to.include.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });
  })
});