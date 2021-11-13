const connection = require('../connection');

module.exports = async (collection, document) => {
  return (await connection()).collection(collection).insertOne(document);
};