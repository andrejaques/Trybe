const { Router } = require('express');

const router = Router();

const {
  getAllTalkers,
  getTalkerById,
  addTalker,
  editTalker,
  deleteTalker,
  searchTalkers,
} = require('../controllers');

const {
  tokenAuth,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
} = require('../middlewares');

// Require 01 - GET /talker
router.get('/', getAllTalkers);

// Require 07 - GET /talker/search?q=searchTerm
router.get('/search', tokenAuth, searchTalkers);

// Require 02 - GET /talker/:id 
router.get('/:id', getTalkerById);

// Require 04 - POST /talker
router.post('/',
tokenAuth,
validateName,
validateAge,
validateTalk,
validateRate,
validateDate,
addTalker);

// Require 05 - PUT /talker/:id
router.put('/:id',
tokenAuth,
validateName,
validateAge,
validateTalk,
validateRate,
validateDate,
editTalker);

// Require 06 - DELETE /talker/:id
router.delete('/:id',
tokenAuth,
deleteTalker);

module.exports = router;