const service = require('../../service/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = service.findById(id);
    if (!found) {
      return res.status(404).end();
    }
        
    await service.remove(id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};