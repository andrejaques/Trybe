const express = require('express');
const artist = require('./artist/router');
const song = require('./song/router');

const root = express.Router({ mergeParams: true });

root.use('/artist', artist);
root.use('/song', song);

module.exports = root;