const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'rest';

let connection = null;

module.exports = async () => {
  try {
    return connection ?
      connection :
      connection = (await MongoClient.connect(
        URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )).db(DB_NAME);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};