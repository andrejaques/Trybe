const Author = require('../models/Author');

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

// check if is a valid author
const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  
  return true;
};

const getAll = () => {
  const authors = Author.getAll();

  return authors.map(getModAuthors);
};

const getById = (id) => {
  const author = Author.getById(id);

  return getModAuthors(author);
};

const create = (firstName, middleName, lastName) => {
  if (!isValid(firstName, middleName, lastName)) return false;

  const author = Author.create(firstName, middleName, lastName);

  return getModAuthors(author);
};

const updateById = (id, firstName, middleName, lastName) => {
  if (!isValid(firstName, middleName, lastName)) return false;

  const author = Author.update(id, firstName, middleName, lastName);

  return getModAuthors(author);
};

const deleteById = (id) => {
  const author = Author.deleteById(id);
  
  return getModAuthors(author);
};

module.export = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
