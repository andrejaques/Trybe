let id = 1

const createProduct = (req, res) => {
  console.log(`Requisicao feita pelo usuario ${req.user}`);
  const { name } = req.body;
  res.status(200).send({_id: id, name });
  id++;
}

module.exports = { createProduct };