const ERROR_EMPTY_NAME = 'O campo "name" é obrigatório';
const ERROR_INVALID_NAME = 'O "name" deve ter pelo menos 3 caracteres';

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') return res.status(400).json({ message: ERROR_EMPTY_NAME });
  if (name.length < 3) return res.status(400).json({ message: ERROR_INVALID_NAME });

  next();
};

module.exports = validateName;