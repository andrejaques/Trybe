db.voos.find({
  "passageiros.pagos": { $gt: 7000 },
  }, {
    _id: false,
    vooId: true,
    mes: true,
    ano: true,
}).limit(1);