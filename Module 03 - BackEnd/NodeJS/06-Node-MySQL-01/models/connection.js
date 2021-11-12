const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'andrejaques',
  password: 'quaqua123.',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;