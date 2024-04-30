// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const accountControllers = require('../controllers/account.js');

// define settings routes
router.get('/settings', accountControllers.getAccountSettings);

// update username route
router.get('/settings/username', accountControllers.getAccountSettings);
router.post('/settings/username', accountControllers.postUpdateUsername);

// update email route
router.get('/settings/email', accountControllers.getAccountSettings);
router.post('/settings/email', accountControllers.postUpdateEmail  );

// update password route
router.get('/settings/password', accountControllers.getAccountSettings);
router.post('/settings/password', accountControllers.postUpdatePassword  );

// delete account route
router.get('/settings/closeAccount', accountControllers.getAccountSettings);
router.post('/settings/closeAccount', accountControllers.postCloseAccount);


// Define routes for user create accounts
router.get('/createAccount', accountControllers.getCreateAccount);
router.post('/createAccount', accountControllers.postCreateAccount);

// Define routes for user login
router.get('/login', accountControllers.getUserLogin);
router.post('/login', accountControllers.postUserLogin);

// Define routes for user logout
router.get('/logout', accountControllers.getUserLogout);





// export router
module.exports = router;