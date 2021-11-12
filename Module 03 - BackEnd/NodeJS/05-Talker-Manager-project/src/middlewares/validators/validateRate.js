const ERROR_INVALID_RATE = 'O campo "rate" deve ser um inteiro de 1 à 5';

const validateRate = (req, res, next) => {
  const { talk } = req.body;
  if (talk.rate < 1 || talk.rate > 5) return res.status(400).json({ message: ERROR_INVALID_RATE });
  
  next();
};

module.exports = validateRate;