const connection = require('../connection');

module.exports = async (collection, entity) => {
  const { _id, ...entityWithoutId } = entity;

  await (await connection()).collection(collection).updateOne(
    { _id: _id },
    {
      $set: entityWithoutId,
    },
  )

  return entity;
};