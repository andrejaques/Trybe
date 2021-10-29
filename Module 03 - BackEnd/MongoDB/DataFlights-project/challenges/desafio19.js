db.voos.findOne({
  litrosCombustivel: { $exists: true },
}, {
  _id: false,
  vooId: true,
});