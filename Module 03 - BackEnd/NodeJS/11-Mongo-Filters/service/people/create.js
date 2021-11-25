const People = require('../../model/document')('people');

module.exports = async (person) => {
  return People.create(person);
}