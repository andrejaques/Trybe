const register = async (req, res) => {
  res.status(201).send({ message: 'user created' });
};

module.exports = register;
