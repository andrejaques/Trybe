// Auths
const tokenAuth = require('./auth/tokenAuth');

// Validators
const validateEmail = require('./validators/validateEmail');
const validatePassword = require('./validators/validatePassword');
const validateName = require('./validators/validateName');
const validateAge = require('./validators/validateAge');
const validateTalk = require('./validators/validateTalk');
const validateRate = require('./validators/validateRate');
const validateDate = require('./validators/validateDate');

module.exports = {
  tokenAuth,
  validateEmail,
  validatePassword,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
};