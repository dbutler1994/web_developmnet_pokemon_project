const express = require('express');
const router = express.Router();
const expansionsModel = require('../controllers/expansions');


router.get('/', expansionsModel.getAllExpansions); // GET all expansions


module.exports = router;
