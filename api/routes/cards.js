const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards');

// set up get routes
router.get('/', cardsController.getAllCards);
router.get('/:cardId', cardsController.getSingleCard);
router.get('/sets/:setId', cardsController.getCardsBySetId);


module.exports = router;
