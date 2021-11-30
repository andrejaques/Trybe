const jwt = require('jsonwebtoken');
const { findUser, insertUser } = require('../models/users');

const secret = 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const findUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário pessoa usuária e senha para fazer login' }
  );

  const userSearch = await findUser(username);

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Pessoa usuária não existe ou senha inválida' }
  );

  const { password: passBD, ...userWithoutPassword } = userSearch;
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  return ({ status: 200, message: token });
};

const createUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await insertUser(username, password);

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { findUserService, createUserService };
