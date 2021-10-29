const mongose = require('mongoose');

mongose.connect(
  'mongodb+srv://dbTest:<123>@cluster0.4me48.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
).catch(() => console.log("Funfou connect"));

module.exports = mongose;

