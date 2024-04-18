const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards');

router.get('/', cardsController.getAllCards);
router.get('/:cardId', cardsController.getSingleCard);


module.exports = router;
