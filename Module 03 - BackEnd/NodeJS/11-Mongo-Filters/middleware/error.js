const statusCode = require('http-status-codes').StatusCodes;

module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(statusCode.INTERNAL_SERVER_ERROR).end();
};