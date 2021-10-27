const validateEmail = require('./validateEmail');
const getToken = require('./getToken');
const validateUsername = require('./validateUsername');
const validatePassword = require('./validatePassword');
const register = require('./register');

module.exports = {
  validateEmail, validateUsername, validatePassword, getToken, register,
};
