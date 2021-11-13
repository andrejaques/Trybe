const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (collection, id) => {
  return ObjectId.isValid(id) ?
    (await connection()).collection(collection).findOne(ObjectId(id)) :
    null;
};