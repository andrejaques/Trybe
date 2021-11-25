const sinon = require('sinon');
const { expect } = require('chai');
const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');
const { assert } = require('console');

describe('Ao chamar getAll() do movie controller', () => {
  const request = { };
  const response = { };

  before(() => {
    sinon.stub(movieService, 'getAll').resolves([
      {
        _id: '',
        title: '',
        releaseYear: '',
        directedBy: ''
      },
    ])

    request.body = { };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  });

  after(() => {
    movieService.getAll.restore();
  });

  describe('quando não existem filmes cadastrados no banco', () => {
    it('funcao status() é chamada com codigo 200', async () => {
      await movieController.getAll(request, response);

      assert(response.status.calledWith(200));
    });
    it('chama funçcao res.json() passando um array', async () => {
      await movieController.getAll(request, response);

      assert(response.json.calledWith(sinon.match.array));
    });
  });
});