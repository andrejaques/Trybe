const validateUsername = async (req, res, next) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ message: 'username não válido' });
  }
  const validateLength = username.length > 3;

  if (!validateLength) {
    return res.status(400).send({ message: 'username não válido' });
  }
  return next();
};

module.exports = validateUsername;
