// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const cardControllers = require('../controllers/cards');

// Define routes
router.get('/', cardControllers.getAllCards);
router.get('/:id', cardControllers.getCardById);
router.get('/sets/:id', cardControllers.getCardsBySetId);
router.get('/collections/:collectionId', cardControllers.getAllCardsByCollectionId);


// export router
module.exports = router;