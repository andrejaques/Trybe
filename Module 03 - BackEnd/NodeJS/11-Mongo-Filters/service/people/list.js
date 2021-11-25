const People = require('../../model/document')('people');

module.exports = async (filters) => {
  const { letter, ...otherFilters } = filters;

  const people = await People.find(otherFilters);

  return people.filter(pep => pep.name.toUpperCase().startsWith(letter ? letter.toUpperCase() : ''));
}