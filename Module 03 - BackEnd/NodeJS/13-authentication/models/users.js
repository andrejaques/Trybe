const connect = require('./connection');

const insertUser = async (username, password) => {
  const db = await connect();
  const result = db.collection('users').insertOne({ username, password });
  return result;
}

const findUser = async (username) => {
  const db = await connect();
  const result = db.collection('users').findOne({ username });
  return result;
}

module.exports = { insertUser, findUser };
