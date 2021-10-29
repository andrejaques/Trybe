const express = require('express');
const {
  validateEmail, validateUsername, validatePassword, getToken, register,
} = require('./middleware');

const app = express();

app.use(express.json());

app.post('/user/register', validateUsername, validatePassword, validateEmail, register);

app.post('/user/login', validateEmail, validatePassword, getToken);

app.listen(3000, () => console.log('im listen 3000 port'));
