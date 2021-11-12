const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const getById = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  try {
    const author = await Author.create(first_name, middle_name, last_name);
  
    if (!author) return res.status(400).json({ message: 'Invalid Data' });

    res.status(201).json({ message: 'Author created' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  try {
    await Author.deleteById(id);
    res.status(200).json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { first_name, middle_name, last_name } = req.body;
  
  try {
    const author = await Author.updateById(id, first_name, middle_name, last_name);
    if (!author) return res.status(404).json({ message: 'Author not found' });

    res.status(200).json({ message: 'Author updated' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};