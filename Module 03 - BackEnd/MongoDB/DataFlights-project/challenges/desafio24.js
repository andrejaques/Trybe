db.voos.findOne({
  litrosCombustivel: {
    $lte: 600,
    $exists: true,
  },
  "empresa.nome": {
    $nin: ["GOL", "AZUL"],
  },
}, {
  _id: false,
  vooId: true,
  "empresa.nome": true,
  litrosCombustivel: true,
});