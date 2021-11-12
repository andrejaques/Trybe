const connection = require('./connection');

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
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getModAuthors);
};

// Search for an author by id
const getById = async (id) => {
  const [authorData] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?', [id]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  
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
  return await connection.execute(
    'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]);
};

// delete an author
const deleteById = async (id) => {
  const [authorData] = await connection.execute('SELECT id FROM authors WHERE id = ?', [id]);

  if (authorData.length === 0) return null;

  return await connection.execute('DELETE FROM authors WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  isValid,
  create,
  deleteById,
};