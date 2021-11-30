const { findUserService } = require('../services/users');

const login = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;
    const result = await findUserService(username, password);
    
    return res.status(result.status).json({ message: result.message });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}

module.exports = { login };
