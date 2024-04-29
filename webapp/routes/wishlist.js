// Get express and router
const express = require("express");
const router = express.Router();

// Get controllers
const wishlistControllers = require('../controllers/wishlist');

// Define get routes
router.get('/', wishlistControllers.getUserWishlist);

router.post('/add', wishlistControllers.addCardToWishlist);
router.post('/remove', wishlistControllers.removeCardFromWishlist);


// export router
module.exports = router;