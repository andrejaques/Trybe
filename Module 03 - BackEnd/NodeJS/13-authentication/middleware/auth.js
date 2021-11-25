const authService = require('../services/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: 'token não informado!' });
    }

    const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(401).send({ message: 'Token invalido' });
    }
    req.user = user;

    next()
  } catch (err) {
    res.status(500).end();
  }
}