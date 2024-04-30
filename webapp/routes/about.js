// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const aboutController = require('../controllers/about');

// Define routes
router.get('/', aboutController.getAbout );


// export router
module.exports = router;