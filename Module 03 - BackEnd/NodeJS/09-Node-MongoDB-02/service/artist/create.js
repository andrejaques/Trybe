const Artist = require('../../model/document')('artist');

module.exports = async (artist) => {
  return Artist.create(artist);
};