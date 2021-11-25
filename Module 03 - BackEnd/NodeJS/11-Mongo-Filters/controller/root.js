const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/people', require('./people/router'));

module.exports = root;