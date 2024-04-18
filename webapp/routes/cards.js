// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const cardControllers = require('../controllers/cards');

// Define routes
router.get('/', cardControllers.getAllCards);
router.get('/:id', cardControllers.getCardById);


// export router
module.exports = router;