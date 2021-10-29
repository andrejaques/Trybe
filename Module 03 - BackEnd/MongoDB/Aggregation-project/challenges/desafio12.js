db.trips.aggregate([
  {
    $group: {
      _id: {
        diaDaSemana: { $dayOfWeek: "$startTime" },
        estacao: "$startStationName",
      },
      total: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      _id: false,
      nomeEstacao: "$_id.estacao",
      total: "$total",
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
