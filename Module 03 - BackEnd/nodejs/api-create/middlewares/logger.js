const wrapper = require('../util/wrapper');

const logger = async (req, _res, next) => {
  req.startTime = Date.now();
  console.log(`[${req.method}] ${req.path}`);
};

module.exports = wrapper(logger);