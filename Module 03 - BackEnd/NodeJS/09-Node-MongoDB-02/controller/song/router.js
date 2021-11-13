const express = require('express');
const create = require('./create');

const router = express.Router();

router.post('/', create);

module.exports = router;