// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const accountControllers = require('../controllers/account.js');

// Define routes for user accounts
router.get('/createAccount', accountControllers.getCreateAccount);


// export router
module.exports = router;