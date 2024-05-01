// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const collectionsControllers = require('../controllers/collections');

// define get routes
router.get('/', collectionsControllers.getAllCollections);


// Define post routes
router.post('/createCollection', collectionsControllers.createCollection);
router.post('/deleteCollection', collectionsControllers.deleteCollection);
router.post('/updateRecord', collectionsControllers.updateCollectionEntry);
router.post('/updateRecord/add', collectionsControllers.addCollectionEntry);
router.post('/updateRecord/remove', collectionsControllers.removeCollectionEntry);


// export router
module.exports = router;