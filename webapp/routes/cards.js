// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const {getAllCards} = require('../controllers/cards');

// Define routes
router.get('/', getAllCards);


// export router
module.exports = router;