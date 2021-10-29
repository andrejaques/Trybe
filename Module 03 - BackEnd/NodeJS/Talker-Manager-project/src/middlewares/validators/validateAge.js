const ERROR_EMPTY_AGE = 'O campo "age" é obrigatório';
const ERROR_INVALID_AGE = 'A pessoa palestrante deve ser maior de idade';

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age || age === '') return res.status(400).json({ message: ERROR_EMPTY_AGE });
  if (age < 18) return res.status(400).json({ message: ERROR_INVALID_AGE });

  next();
};

module.exports = validateAge;