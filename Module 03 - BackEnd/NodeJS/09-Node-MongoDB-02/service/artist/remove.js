const Artist = require('../../model/document')('artist');

module.exports = async (id) => {
  return Artist.remove(id);
}