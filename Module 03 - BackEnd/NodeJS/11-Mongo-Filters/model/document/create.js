const connection = require('../connection');

module.exports = async (collection, entity) => {
  return (await connection()).collection(collection).insertOne(entity);
};