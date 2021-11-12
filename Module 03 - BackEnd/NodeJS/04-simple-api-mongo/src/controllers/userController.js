const { validateRegister, validateLogin } = require('../validations');
const { insertUser } = require('../models/userModels');

const users = [];

const register = async (req, res) => {
    const { username, email, password } = req.body;

    const response = await validateRegister(username, email, password);

    if (response.code !== 200) {
      return res.status(response.code).json({
        message: response.message
      });
    }

    const mongoRes = await insertUser({ username, email, password });

   res.status(200).json({ message: mongoRes });
}

const login = async (req, res) => {
    const { username, password } = req.body;

    const isValid = validateLogin(username, password);

    if (isValid.code !== 200) {
      return res.status(response.code).jason({
        message: response.message
      });
    }

    const mongoRes = await insertUser({ username, email, password });

    res.status(200).json({message: mongoRes });
}

module.exports = {
  register,
  login,
};
