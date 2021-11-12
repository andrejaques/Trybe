const checkToken = require('../../helpers/checkToken');

const ERROR_EMPTY_TOKEN = 'Token não encontrado';
const ERROR_INVALID_TOKEN = 'Token inválido';

const tokenAuth = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token || token === '') return res.status(401).json({ message: ERROR_EMPTY_TOKEN });

  const checked = checkToken(token);

  if (!checked) return res.status(401).json({ message: ERROR_INVALID_TOKEN });

  next();
};

module.exports = tokenAuth;
