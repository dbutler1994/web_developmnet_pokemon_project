// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const accountControllers = require('../controllers/account.js');

// Define routes for user create accounts
router.get('/createAccount', accountControllers.getCreateAccount);
router.post('/createAccount', accountControllers.postCreateAccount);

// Define routes for user login
router.get('/login', accountControllers.getUserLogin);
router.post('/login', accountControllers.postUserLogin);


// export router
module.exports = router;