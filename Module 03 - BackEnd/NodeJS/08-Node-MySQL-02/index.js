const express = require('express');
const character = require('./controller/character');

const PORT = 3001;

const app = express();

app.use(express.json());

app.use('/character', character);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).end();
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`));