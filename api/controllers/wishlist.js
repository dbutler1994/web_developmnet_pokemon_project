const wishlistModel = require('../models/wishlist');
const bcrypt = require('bcrypt');


const getUserWishlist = async (req, res) => {
    try {
        // get the user id and card id from the request
        const userId = req.query.userId;

        const jsonResponse =  await wishlistModel.getWishlist(userId);

        // send a success response
        res.status(200).json(jsonResponse);
    } catch (error) {
        // send errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const addToWishlist = async (req, res) => {
    try {
        // get the user id and card id from the request
        const { cardId, userId} = req.body;
        //console.log(cardId, userId);

        const jsonResponse =  await wishlistModel.addToWishlist(userId, cardId);

         // send a success response
         res.status(201).json({ message: 'Wishlist successfully updated'});
    } catch (error) {
        // send errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const removeFromWishlist = async (req, res) => {
    try {
        // get the user id and card id from the request
        const { cardId, userId} = req.body;
        console.log(cardId, userId);

        const jsonResponse =  await wishlistModel.removeFromWishlist(userId, cardId);

         // send a success response
         res.status(201).json({ message: 'Wishlist successfully updated'});
    } catch (error) {
        // send errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = {
    getUserWishlist,
    addToWishlist,
    removeFromWishlist
};
