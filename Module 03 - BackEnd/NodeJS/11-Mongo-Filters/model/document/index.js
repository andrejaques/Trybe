const _find = require('./find');
const _create = require('./create');
const _update = require('./update');
const _remove = require('./remove');
const _findById = require('./findById');

module.exports = (collection) => { 
  return {
    find: (filters) => _find(collection, filters),
    remove: (id) => _remove(collection, id),
    create: (entity) => _create(collection, entity),
    update: (entity) => _update(collection, entity),
    findById: (id) => _findById(collection, id),
  } 
};