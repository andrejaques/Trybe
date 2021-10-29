const express = require('express');

const router = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the API' }));

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});
