const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

router.post('/createAccount', accountController.registerAccount);


module.exports = router;
