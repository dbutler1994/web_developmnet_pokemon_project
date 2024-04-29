const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist');

router.get('/:userId', wishlistController.getUserWishlist);

router.post('/add', wishlistController.addToWishlist);
router.post('/remove', wishlistController.removeFromWishlist);



module.exports = router;
