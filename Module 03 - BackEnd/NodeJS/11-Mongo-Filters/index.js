const express = require('express');
const error = require('./middleware/error');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use(require('./controller/root'));

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));