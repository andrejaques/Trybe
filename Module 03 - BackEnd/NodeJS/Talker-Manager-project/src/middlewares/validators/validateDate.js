const moment = require('moment');

const ERROR_INVALID_DATE = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';

const validateDate = (req, res, next) => {
  const { talk } = req.body;
  const validDate = moment(talk.watchedAt, 'DD/MM/YYYY').isValid();
  if (!validDate) return res.status(400).json({ message: ERROR_INVALID_DATE });
  
  next();
};

module.exports = validateDate;