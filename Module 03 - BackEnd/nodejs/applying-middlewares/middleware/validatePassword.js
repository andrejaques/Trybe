const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).send({ message: 'password not avalible' });

  const passwordRegex = /^\d+$/;
  const passwordIsNumber = passwordRegex.test(password);
  const validadeLength = password.toString().length > 3 && password.toString().length <= 8;

  if (passwordIsNumber && validadeLength) {
    return next();
  }
  return res.status(400).send({ message: 'password not avalible' });
};

module.exports = validatePassword;
