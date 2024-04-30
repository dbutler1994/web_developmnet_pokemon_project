const express = require('express');
const router = express.Router();
const setsModel = require('../controllers/sets');

router.get('/', setsModel.getAllSets); // GET all sets
router.get('/:setId', setsModel.getSetById); // GET all sets


module.exports = router;
