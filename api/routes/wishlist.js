const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist');

// get user wishlist
router.get('/:userId', wishlistController.getUserWishlist);

// add and remove cards from wishlist
router.post('/add', wishlistController.addToWishlist);
router.post('/remove', wishlistController.removeFromWishlist);



module.exports = router;
