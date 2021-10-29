const ERROR_EMPTY_TALK = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) return res.status(400).json({ message: ERROR_EMPTY_TALK });
  if ([talk.watchedAt, talk.rate].includes(undefined)) {
    return res.status(400).json({ message: ERROR_EMPTY_TALK });
  }
  
  next();
};

module.exports = validateTalk;