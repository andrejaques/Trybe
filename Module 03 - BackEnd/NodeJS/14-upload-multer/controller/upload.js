const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  if (req.file) {
    console.log('Arquivo chegou no req.file');
    return res.status(StatusCodes.OK).send({ message: 'Arquivo subido com sucesso' });
  }
  res.status(StatusCodes.NO_CONTENT).end();
}