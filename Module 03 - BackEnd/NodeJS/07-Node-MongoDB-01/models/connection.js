const { MongoClient } = require("mongodb");

const MONGODB_URL = "mongodb://localhost:27017";

const connection = () => {
  return MongoClient.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('model_example'))
  .catch((err) => {
    console.log(err);
    process.exit();
  });
};

module.exports = connection;
