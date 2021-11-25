const express = require('express')
require ('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

const Author = require('./controllers/Author');

app.use(express.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.getById);

app.post('/authors', Author.create);

app.delete('/authors/:id', Author.deleteById);

app.put('/authors/:id', Author.updateById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));