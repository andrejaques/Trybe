const express = require('express');
const wrapper = require('../util/wrapper');

let products = [
  {
    id: 1,
    name: 'office chair',
    colors: ['blue', 'white']
  },
  {
    id: 2,
    name: 'candles',
    colors: ['white']
  }
];

const PRODUCT_NOT_FOUND = {
  status: 404,
  message: `Product id not found.`,
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  
  const product = products.find(val => val.id === parseInt(id, 10));

  if (!product) {
    return next(PRODUCT_NOT_FOUND)
  }

  res.status(200).send(product);
}

const list = async (req, res, next) => {
  res.status(200).send(products);
}

const create = async (req, res, next) => {
  products.push(req.body);
  res.status(201).end();
}

const remove = async (req, res, next) => {
  const { id } = req.params;
  products = products.filter(val => val.id !== parseInt(id, 10));
  res.status(204).end();
}

const router = express.Router({ mergeParams: true });

router.get('/', wrapper(list));
router.get('/:id', wrapper(findById));
router.post('/', wrapper(create));
router.delete('/:id', wrapper(remove));

module.exports = router;