const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../../service/people');

const getFilters = (query) => {
  let filters = { ...query }
  if (query.age) {
    filters = { ...filters, age: parseInt(query.age) };
  }

  return filters;
}

module.exports = async (req, res, next) => {
  try {
    const filters = getFilters(req.query);

    const people = await service.list(filters);

    return res.status(statusCodes.OK).send(people);
  } catch (err) {
    next(err);
  }
}