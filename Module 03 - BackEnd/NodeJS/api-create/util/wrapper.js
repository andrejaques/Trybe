// Usamos um wrapper para poder retornar o next() e encapsular o erro
module.exports = handler => {
  return async (req, res, next) => {
    try {
      handler(req, res, next);
      next();
    } catch (err) {
      next(err);
    }
  }
};
