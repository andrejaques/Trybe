const connection = require('../connection');

module.exports = async (collection, filters) => {
  return (await connection()).collection(collection).find(filters).toArray();
};