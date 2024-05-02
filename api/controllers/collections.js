const collectionsModel = require('../models/collections');

// get all collections. This will be used to populate the collection dropdown in the UI
const getAllCollections = async (req, res) => {
    try {
        // get the user id from the request
        const userId = req.query.userId;

        // call the model to get the collections for the user
        const collections = await collectionsModel.getAllCollections(userId);

        // send the response
        res.status(200).json(collections);
    } catch (error) {
        console.error("Error updating collection entry:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

// create a new collection
const createCollection = async (req, res) => {
    try {
        const { userId, collectionName, isDefaultCollection } = req.body;

        // call the model to create a new collection
        const collections = await collectionsModel.createCollection(userId, collectionName, isDefaultCollection);
        
        // send the response
        if (collections) {
            res.status(201).json({ message: 'Collection created' });
        } else {    
            res.status(500).json({ error: 'Problem creating collection' });
        }

    } catch (error) {
        console.error("Error updating collection entry:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// delete a collection of the specified collection id 
const deleteCollection = async (req, res) => {
    try {
        const { collectionId } = req.body;
        console.log('deleting collection');
        console.log(collectionId);

        // call the model to delete a collection
        const result = await collectionsModel.deleteCollection(collectionId);

        // send the response
        if (result) {
            res.status(200).json({ message: 'Account closed successfully' });
        } else {
            res.status(500).json({ error: 'Problem closing account' });
        }

    } catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
}

// update an existing collection entry. If the entry doesn't exist, create a new entry in the default collection for the user
const updateCollectionEntry = async (req, res) => {
    try {
        // get the parameters from the request   
        const { cardId, userId, collectionId, copies, notes } = req.body;

        // Check if record exists
        const existingRecord = await collectionsModel.getCollectionsCards(userId, cardId, collectionId);

        // If record exists, update copies and notes
        if (existingRecord.length > 0) {
            // update copies
            if (copies) {
                await collectionsModel.updateCollectionEntryCopies(userId, collectionId, cardId, copies);
            }

            // update notes
            if (notes) {
                await collectionsModel.updateCollectionEntryNotes(userId, collectionId, cardId, notes);
            }

        } else {
            // if record doesn't exist, attempt to add a new entry 
            await collectionsModel.addCardCollectionEntry(userId, collectionId, cardId, copies, notes);
        }

        res.status(201).json({ message: 'Collection entry successfully updated' });

    } catch (error) {
        console.error("Error updating collection entry:", error);
        res.status(500).json({ error: "Problem updating collection entry" });
    }
};

// add new card entry to a collection
const addCollectionEntry = async (req, res) => {
    try {
        // get the parameters from the request   
        const {userId, cardId, collectionId, copies, notes } = req.body;
        // Add new entry
        const result = await collectionsModel.addCardCollectionEntry(userId, collectionId, cardId, copies, notes);

        // send the response
        if(result){
            res.status(201).json({ message: 'Collection entry successfully updated' });
        } else {
            res.status(500).json({ error: 'Problem updating collection entry' });
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// add new entry to a collection
const removeCollectionEntry = async (req, res) => {
    try {
        // get the parameters from the request   
        const {cardId, collectionId} = req.body;

        // remove entry
        const result = await collectionsModel.removeCardCollectionEntry(collectionId, cardId);

        // send the response        
        if(result.affectedRows > 0){
            res.status(201).json({ message: 'Collection entry successfully updated' });
        } else {
            res.status(500).json({ error: 'No record found' });
        }
        
    } catch (error) {
        console.error("Error updating collection entry:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = {
    updateCollectionEntry,
    getAllCollections,
    createCollection,
    deleteCollection,
    addCollectionEntry,
    removeCollectionEntry

};
