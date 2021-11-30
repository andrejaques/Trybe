const jwt = require('jsonwebtoken');
const { findUser } = require('../models/users');
const segredo = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.verify(token, segredo);
    const user = decoded.data;

    req.user = user;
    return next();
  } catch (_err) {
    return res.status(401).json({ message: 'Erro: Seu token é inválido.' });
  }
};

module.exports = { validateJWT };
