const express = require('express');
const router = express.Router();
const filterContoller = require('../controllers/filters');

// get all filters
router.get('/', filterContoller.getFilterOptions);



module.exports = router;
