const express = require('express');
const router = express.Router();
const setsModel = require('../controllers/sets');

// setup get routes
router.get('/', setsModel.getAllSets); 
router.get('/:setId', setsModel.getSetById);


module.exports = router;
