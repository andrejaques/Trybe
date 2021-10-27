module.exports = async (err, req, res, next) => {
  try {
    if (err.status) {
      return res.status(err.status).send({ message: err.message });
    }
  
    res.status(500).end();
  } catch {
    res.status(500).end(`Unknown error`);
  }
};
