const ERROR_EMPTY_EMAIL = 'O campo "email" é obrigatório';
const ERROR_INVALID_EMAIL = 'O "email" deve ter o formato "email@email.com"';

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailValidator = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);

  if (!email || email === '') return res.status(400).json({ message: ERROR_EMPTY_EMAIL });
  if (!emailValidator) return res.status(400).json({ message: ERROR_INVALID_EMAIL });

  next();
};

module.exports = validateEmail;
