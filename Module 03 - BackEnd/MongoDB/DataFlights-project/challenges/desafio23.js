db.voos.findOne({
  litrosCombustivel: {
    $lte: 1000,
    $exists: true,
  },
}, {
  _id: false,
  vooId: true,
  litrosCombustivel: true,
});