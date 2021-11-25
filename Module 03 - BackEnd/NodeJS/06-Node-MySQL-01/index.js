const express = require('express')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

const Author = require('./models/Author');

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Invalid author' });

  try {
    await Author.create(first_name, middle_name, last_name);
  
    res.status(201).json({ message: 'Author created' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  try {
    await Author.deleteById(id);
    res.status(200).json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));