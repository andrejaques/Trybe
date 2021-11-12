const connection = require('./connection');
const { ObjectId } = require('mongodb');



// convert snake_case to camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
};

// Search all authors
const getAll = async () => {
  connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return {
          id: _id,
          firstName,
          middleName,
          lastName,
        };
      });
    });
};

// Search for an author by id
const getById = async (id) => {
  const authorData = connection()
    .then((db) => db.collection('authors').findOne(Object(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;
  
  return {
    id,
    firstName,
    middleName,
    lastName,
  };
};

// create an author
const create = async (firstName, middleName, lastName) => {
  return await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
};

// update an author
const updateById = async (id, firstName, middleName, lastName) => {
  return await connection()
    .then((db) => db.collection('authors').updateOne(
      { _id: ObjectId(id) },
      { $set: { firstName, middleName, lastName } }
    ));
};

// delete an author
const deleteById = async (id) => {
  return await connection()
    .then((db) => db.collection('authors').deleteOne(ObjectId(id)));
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
};