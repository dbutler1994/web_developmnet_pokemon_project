const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards');

router.get('/', cardsController.getAllCards);

module.exports = router;
