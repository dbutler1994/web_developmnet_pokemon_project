// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const collectionsControllers = require('../controllers/collections');

// Define post routes
router.post('/updateRecord', collectionsControllers.updateCollectionEntry);


// export router
module.exports = router;