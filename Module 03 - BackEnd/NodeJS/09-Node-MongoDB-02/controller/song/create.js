const service = require('../../service/song');

module.exports = async (req, res, next) => {
  try {
    const { artistId, name, album } = req.body;

    if (!artistId || !name || !album) {
      return res.status(400).send({ message: 'must inform artistId, name and album' });
    }

    let newSong = { artistId, name, album };
    newSong = await service.create(newSong);
    if (!newSong) {
      return res.status(400).send({ message: 'invalid artist id' });
    }

    return res.status(201).send(newSong);
  } catch (err) {
    next(err);
  }
};