// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const{getIndex} = require('../controllers/index');

// Define routes
router.get('/', getIndex);


// export router
module.exports = router;