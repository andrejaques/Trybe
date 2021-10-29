db.voos.find(null, 
  {
    vooId: true,
    _id: false,
})
  .limit(3)
  .skip(9);