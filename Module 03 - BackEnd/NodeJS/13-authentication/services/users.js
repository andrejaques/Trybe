const { findUser, insertUser } = require('../models/users');
const authService = require('./auth');

const findUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  const userFound = await findUser(username);

  if (!userFound || userFound.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' }
  );

  const { password: _password, ...userWithoutPassword } = userFound;

  const token = authService.genToken(userWithoutPassword)

  return ({ status: 200, message: token })
};

const createUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await insertUser(username, password);

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { findUserService, createUserService };
