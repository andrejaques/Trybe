const express = require('express');
const model = require('../model/sql/character');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res, next) => {
  try {
    characters = await model.find();

    return res.status(200).send(characters);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const character = await model.findById(parseInt(id));

    if (!character) {
      return res.status(404).end();
    }

    return res.status(200).send(character);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.series) {
      res.status(400).send({ message: 'must inform name and series' })
    }

    const created = await model.create(req.body);

    return res.status(201).send(created);
  } catch (err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (!req.body.name || !req.body.series) {
      return res.status(400).send({ message: 'must inform name and series' });
    }

    const found = await model.findById(parsedId);

    if (!found) {
      return res.status(404).end();
    }

    const updated = await model.update({...found, ...req.body});
      
    return res.status(200).send(updated);
  } catch (err) {
    next(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);

    const found = await model.findById(parsedId);

    if (!found) {
      return res.status(404).end();
    }

    await model.remove(parsedId);
    
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
})

module.exports = router;