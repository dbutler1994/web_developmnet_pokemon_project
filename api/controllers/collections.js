const collectionsModel = require('../models/collections');


const updateCollectionEntry = async (req, res) => {
    try {
        // get the parameters from the request   
        const { cardId, userId, collectionId, copies, notes } = req.body;

        console.log('notes' + notes);
        
         // Check if record exists
        const existingRecord = await collectionsModel.getCollectionsCards(userId, cardId, collectionId);
        console.log(existingRecord.length >0 );

        // If record exists, update copies and notes
        if (existingRecord.length > 0) {
            // update copies
            if(copies){
                await collectionsModel.updateCollectionEntryCopies(userId, collectionId, cardId, copies);
                console.log('updated copies');
            }

            // update notes
            if(notes){
                await collectionsModel.updateCollectionEntryNotes(userId, collectionId, cardId, notes);
                console.log('updated notes');
            }
               
        } else {
            // if record doesn't exist, add new entry
            console.log('adding new entry');
            await collectionsModel.addCardCollectionEntry(userId,collectionId, cardId, copies, notes);
        }

        res.status(201).json({ message: 'Collection entry successfully updated'});
    } catch (error) {
        res.status(500).json({ error: error.message});
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
    addToWishlist,
    removeFromWishlist,
    updateCollectionEntry
};
