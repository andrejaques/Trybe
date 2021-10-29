db.voos.findOne({
  rtk: { $exists: false },
}, {
  _id: false,
  vooId: true,
});