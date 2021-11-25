const path = require('path');
const express = require('express');
const uploadController = require('./controller/upload');
const uploadMiddleware = require('./middleware/upload');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'uploads')))

app.post(
  '/files/upload',
  uploadMiddleware.single('file'),
  uploadController,
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));