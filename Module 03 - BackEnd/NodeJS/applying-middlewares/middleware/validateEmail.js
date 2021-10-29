const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const testRegex = emailRegex.test(email);

  if (!testRegex) {
    return res.status(400).send({ message: 'email não válido' });
  }
  return next();
};

module.exports = validateEmail;
