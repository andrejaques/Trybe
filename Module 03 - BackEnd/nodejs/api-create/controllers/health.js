const wrapper = require('../util/wrapper');

const health = (req, res, next) => {
  res.status(200).send({ message: 'Api is online.' })
};

module.exports = wrapper(health);