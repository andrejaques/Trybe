const { createUserService } = require('../services/users');

const createUser = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;
    const result = await createUserService(username, password);
    
    return res.status(result.status).json({ message: result.message });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};

module.exports = { createUser };
