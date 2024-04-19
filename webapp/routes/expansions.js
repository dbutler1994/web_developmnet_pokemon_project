// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const expansionControllers = require('../controllers/expansions');

// Define routes
router.get('/', expansionControllers.getExpansions);


// export router
module.exports = router;