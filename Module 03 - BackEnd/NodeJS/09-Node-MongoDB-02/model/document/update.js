const connection = require('../connection');

module.exports = async (collection, document) => {
  const { _id, ...documentWithoutId } = document;

  await (await connection()).collection(collection).updateOne(
    { _id: _id },
    {
      $set: documentWithoutId,
    },
  )

  return document;
};