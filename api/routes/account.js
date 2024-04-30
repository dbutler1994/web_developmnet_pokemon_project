const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

// create account
router.post('/createAccount', accountController.registerAccount);

// login account
router.post('/loginAccount', accountController.loginAccount);

// update user settings
router.post('/settings/updateUsername', accountController.updateUsername);

// update user email address
router.post('/settings/updateEmail', accountController.updateEmail);

// update user password
router.post('/settings/updatePassword', accountController.updatePassword);

// close account
router.post('/settings/closeAccount', accountController.closeAccount);

module.exports = router;
