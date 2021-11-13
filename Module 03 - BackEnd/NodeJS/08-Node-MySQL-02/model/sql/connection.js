const mysql = require('mysql2/promise');

let connection = null;

module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: '172.17.0.3',
    port: 3306,
    user: 'andrejaques',
    password: env.local.DATABASE_PASSWORD || 'pass',
    database: 'series',
  });
}
