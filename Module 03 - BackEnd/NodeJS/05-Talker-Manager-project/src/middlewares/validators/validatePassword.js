const ERROR_EMPTY_PASSWORD = 'O campo "password" é obrigatório';
const ERROR_INVALID_PASSWORD = 'O "password" deve ter pelo menos 6 caracteres';

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') return res.status(400).json({ message: ERROR_EMPTY_PASSWORD });
  if (password.length < 5) return res.status(400).json({ message: ERROR_INVALID_PASSWORD });

  next();
};

module.exports = validatePassword;
