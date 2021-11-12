const { Router } = require('express');
const randomToken = require('random-token');

const { validateEmail, validatePassword } = require('../middlewares');

const router = Router();

// Require 03 - POST /login
router.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = randomToken(16);

  res.status(200).json({ token });
});

module.exports = router;