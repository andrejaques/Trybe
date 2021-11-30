const express = require('express');
const bodyParser = require('body-parser');

const { getPosts } = require('./controllers/posts');
const { createProduct } = require('./controllers/products');
const { createUser } = require('./controllers/users');
const { login } = require('./controllers/login');
const { validateJWT } = require('./middlewares/validateJWT');

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', validateJWT, getPosts);
app.post('/api/products', validateJWT, createProduct);
app.post('/api/users', createUser);
app.post('/api/login', login);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

