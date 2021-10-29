const addTalker = require('./talkerControllers/addTalker');
const getTalkerById = require('./talkerControllers/getTalkerById');
const getAllTalkers = require('./talkerControllers/getAllTalkers');
const editTalker = require('./talkerControllers/editTalker');
const deleteTalker = require('./talkerControllers/deleteTalker');
const searchTalkers = require('./talkerControllers/searchTalkers');

module.exports = {
  addTalker,
  getTalkerById,
  getAllTalkers,
  editTalker,
  deleteTalker,
  searchTalkers,
};