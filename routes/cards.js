// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const {getCards} = require('../controllers/cards');

// Define routes
router.get('/', getCards);


// export router
module.exports = router;