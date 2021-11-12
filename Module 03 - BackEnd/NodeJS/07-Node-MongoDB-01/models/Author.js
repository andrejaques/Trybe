const connection = require('./connection');
const { ObjectId } = require('mongodb');

// generate an string with the author's full name
const getModAuthors = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

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
        return getModAuthors({
          id: _id,
          firstName,
          middleName,
          lastName,
        });
      });
    });
};

// Search for an author by id
const getById = async (id) => {
  const authorData = connection()
    .then((db) => db.collection('authors').findOne(Object(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;
  
  return getModAuthors({
    id,
    firstName,
    middleName,
    lastName,
  });
};

// check if is a valid author
const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  
  return true;
};

// create an author
const create = async (firstName, middleName, lastName) => {
  return await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
};

// delete an author
const deleteById = async (id) => {
  return await connection()
    .then((db) => db.collection('authors').deleteOne(ObjectId(id)));
};

module.exports = {
  getAll,
  getById,
  isValid,
  create,
  deleteById,
};