const service = require('../../service/artist');

module.exports = async (req, res, next) => {
  try {
    const artists = await service.list();

    return res.status(200).send(artists);
  } catch (err) {
    next(err);
  }
};