const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collections');

router.post('/update', collectionsController.updateCollectionEntry);



module.exports = router;
