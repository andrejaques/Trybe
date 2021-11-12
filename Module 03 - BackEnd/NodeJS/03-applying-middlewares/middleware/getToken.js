const getToken = async (req, res) => {
  const token = Math.random().toString(36).substring(2, 8) + Math
    .random().toString(36).substring(2, 8);

  res.status(200).send({ token });
};

module.exports = getToken;
