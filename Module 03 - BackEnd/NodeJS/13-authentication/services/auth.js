const jwt = require('jsonwebtoken');
require ('dotenv').config();

const API_SECRET = process.env.API_SECRET || 'mysecret';

const JWT_CONFIG = {
  expiresIn: 60,
  algorithm: 'HS256',
}

const genToken = (data) => {
  return jwt.sign({ data }, API_SECRET, JWT_CONFIG)
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { username } = decoded.data;

    return username;
  } catch (err) {
    return null;
  }
}

module.exports = {
  genToken,
  verifyToken,
}