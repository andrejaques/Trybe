const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../../service/people');

module.exports = async (req, res, next) => {
  try {
    const { name, age } = req.body;
    if (!name || age === undefined || age === null || age === '') {
      return res.status(statusCodes.BAD_REQUEST).send({ message: 'must inform name and age' });
    }

    if (!Number(age)) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).send({ message: 'age must be a number' });
    }

    const newPerson = {
      name,
      age: parseInt(age),
    }

    await service.create(newPerson);

    return res.status(statusCodes.CREATED).send(newPerson);
  } catch (err) {
    next(err);
  }
}