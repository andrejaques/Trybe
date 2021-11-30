const createProduct = (req, res) => {
  if (!req.body.title || !req.body.price) return res.status(422).json(
    { message: 'Produto sem título e/ou preço' }
  );

  return res.status(200).json(
    { message: 'Produto fake criado com sucesso', data: req.body }
  );
};

module.exports = { createProduct };
