const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../../service/people');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const people = await service.findById(id);
    if (!people) {
      return res.status(statusCodes.NOT_FOUND).end();
    }

    return res.status(statusCodes.OK).send(people);
  } catch (err) {
    next(err);
  }
}