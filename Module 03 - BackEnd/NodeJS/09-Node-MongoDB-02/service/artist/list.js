const Artist = require('../../model/document')('artist');

module.exports = async () => {
  return Artist.find();
}