const wrapper = require('../util/wrapper');

const tracker = async (req, res, next) => {
  const responseTime = Date.now() - req.startTime;
  console.log(`\
Response time: ${responseTime}ms\n \
user: ${req.user}`
  );
}

module.exports = wrapper(tracker);