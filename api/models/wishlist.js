// get access to dbPool
const dbPool = require('../db/connect');

// add a card to the wishlist for the specified user
const addToWishlist = async (userId, cardId) => {
    
    try {
        // unique constraint on the wishlist table will prevent duplicate entries. therefore can use insert ignore
        // Attempt to insert the record into the wishlist table
        const insertQuery = 'INSERT IGNORE INTO Wishlist (account_id, card_id) VALUES (?, ?)';
        const result = await dbPool.query(insertQuery, [userId, cardId]);

        // check if insertion occurred (insertId is non-zero)
        if (result.insertId !== 0) {
            return { message: "Card added to wishlist" };
        } else {
            return { message: "Card already exists in the wishlist" };
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

// remove a card from the wishlist for the specified user
const removeFromWishlist = async (userId, cardId) => {

    try{
        const deleteQuery = 'DELETE FROM Wishlist WHERE account_id = ? AND card_id = ?';
        const result = await dbPool.query(deleteQuery, [userId, cardId]);

        // check if insertion occurred (insertId is non-zero)
        if (result.insertId !== 0) {
            return { message: "Card removed from wishlist" };
        } else {
            return { message: "Card did not exist in the wishlist" };
        }

    } catch (error) {
        throw new Error(error.message);
    }

};

// get all cards in a specified user's wishlist
const getWishlist = async (userId) => {
    // get all cards in the wishlist for the specified user
    let sql = 'SELECT card_id FROM Wishlist WHERE account_id = ?';

    try {
        const result = await dbPool.query(sql, [userId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    addToWishlist,
    removeFromWishlist,
    getWishlist
};