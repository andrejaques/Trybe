const People = require('../../model/document')('people');

module.exports = async (id) => {
  return People.findById(id);
}