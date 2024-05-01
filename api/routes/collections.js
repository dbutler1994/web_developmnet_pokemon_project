const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collections');

// routes to get all collections
router.get('/', collectionsController.getAllCollections);

// routes to add a new collection
router.post('/create', collectionsController.createCollection);

// routes to delete a collection
router.post('/delete', collectionsController.deleteCollection);

// routes to update a collection entry
router.post('/update', collectionsController.updateCollectionEntry);
router.post('/update/add', collectionsController.addCollectionEntry);
router.post('/update/remove', collectionsController.removeCollectionEntry);

module.exports = router;
