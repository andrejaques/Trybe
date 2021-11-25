const statusCodes = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    return res.status(statusCodes.NOT_IMPLEMENTED).end();
  } catch (err) {
    next(err);
  }
}