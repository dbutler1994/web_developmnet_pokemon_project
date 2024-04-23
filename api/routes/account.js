const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

// create account
router.post('/createAccount', accountController.registerAccount);

// login account
router.post('/loginAccount', accountController.loginAccount);



module.exports = router;
