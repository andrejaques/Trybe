const express = require('express');
const rescue = require('express-rescue');
const { getSimpsons, setSimpson } = require('./getSimpsons');

const app = express();
app.use(express.json());

// 1.
app.get('/ping', (req, res) => res.status(200).send({ message: 'pong' }));

// 2.
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).send({ message: `Hello, ${name}` });
});

// 3.
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) {
    return res.status(200).send({ message: `Hello, ${name}` });
  }
  return res.status(401).send({ message: 'Unauthorized' });
});

// 4.
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).send({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

// 5.
app.get('/simpsons', rescue(async (req, res) => {
  const { id } = req.query;

  const response = await getSimpsons('simpsons.json');

  const findId = response.find((simpson) => simpson.id === id);

  if (findId) return res.status(200).send(findId);

  return res.status(200).send(response);
}));

// 8.
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const response = await getSimpsons('simpsons.json');
  const newId = id.toString();
  const findId = response.find((simpson) => simpson.id === newId);

  if (!findId) {
    response.push({ id: newId, name });
    setSimpson('simpsons.json', JSON.stringify(response));
    return res.status(204).end();
  }
  return res.status(409).send({ message: 'id already exists' });
});

app.listen(3000, console.log('estou ouvindo a porta 3000'));
