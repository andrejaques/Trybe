const connection = require('../connection');

module.exports = async (collection) => {
  return (await connection()).collection(collection).find().toArray();
};