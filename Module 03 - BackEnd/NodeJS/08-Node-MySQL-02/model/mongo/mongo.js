
const connect = require('./mongoConnection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
  connect().then((db) => db.collection('characters').find().toArray());

const add = async (obj) =>
  connect()
    .then((db) => db.collection('characters').insertOne(obj))
    .then((result) => {id: result.insertedId, obj.name, obj.series });

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connect().then((db) => db.collection('characters').findOne({ _id: ObjectId(id) }));
};

const update = async (obj) => {
  if (!ObjectId.isValid(obj.id)) return null;
return  connect().then((db) =>
    db
      .collection('characters')
      .updateOne({ _id: ObjectId(obj.id) }, { $set: { ...obj } })
      .then(() => (obj))
  );
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connect().then((db) => db.collection('characters').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};