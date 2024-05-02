const wishlistModel = require('../models/wishlist');

// get the user's wishlist from the database and return it
const getUserWishlist = async (req, res) => {
    try {
        // get the user id and card id from the request
        const userId = req.query.userId;
        // get the user's wishlist
        const jsonResponse =  await wishlistModel.getWishlist(userId);

        if(jsonResponse){
            res.status(200).json(jsonResponse);    
        } else{
            res.status(500).json({message: 'No wishlist found.'});
        }
        
    } catch (error) {
        console.error("Error getting sets:", error);
        res.status(500).json({error : "Internal Server Error"}  );
    }
};

// add a card to the user's wishlist
const addToWishlist = async (req, res) => {
    try {
        // get the user id and card id from the request
        const { cardId, userId} = req.body;
        // add the card to the user's wishlist
        await wishlistModel.addToWishlist(userId, cardId);
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
