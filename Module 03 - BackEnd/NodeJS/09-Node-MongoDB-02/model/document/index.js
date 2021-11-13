const _find = require('./find');
const _create = require('./create');
const _update = require('./update');
const _remove = require('./remove');
const _findById = require('./findById');

module.exports = (collection) => { 
  return {
    find: async () => _find(collection),
    remove: async (id) => _remove(collection, id),
    create: async (doc) => _create(collection, doc),
    update: async (doc) => _update(collection, doc),
    findById: async (id) => _findById(collection, id),
  } 
};