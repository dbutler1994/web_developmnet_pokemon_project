// get access to dbPool
const dbPool = require('../db/connect');

// get all collections
const getAllCollections = async (userId) => {
    try {
        let collectionSql = 'SELECT * FROM view_collectionsummary';

        // add a where clause if a user id is specified
        if(userId){
            collectionSql += ' WHERE account_id = ?';
        }

        const result = await dbPool.query(collectionSql, [userId]);

        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// get all collections for a specific user

// create a new collection with the collection name and default collection status
const createCollection = async (userId, collectionName, isDefaultCollection, connection ) => {
    try {
        // build sql string
        // unique constraint on the collection table will prevent duplicate entries. therefore can use insert ignore
        let collectionSql = 'INSERT IGNORE INTO collection (account_id, name, is_default) VALUES (?, ?, ?)';

        if(connection){
            await connection.query(collectionSql, [userId, collectionName, isDefaultCollection]);
        } else{
            await dbPool.query(collectionSql, [userId, collectionName, isDefaultCollection]);
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

// update the users password
const deleteCollection = async (collectionId) => {
    try{
        const deleteSQl = `delete from collection  where collection_id = ?;`;
        const result = await dbPool.query(deleteSQl, [collectionId]);

        // check if the update was successful
        if (result[0].affectedRows > 0) {
            return true; 
        } else {
            return false; 
        }


    } catch (error) {
        throw new Error(error.message);
    }  
};

// get the collection data optional where clauses for user id, card id and collection id
const getCollectionsCards = async (userId, cardId, collectionId) => {
    try {
        let collectionSql = 'SELECT * FROM view_allCollectionsEntries WHERE 1=1';
        const queryValues =[]; //holds the values to be passed to the query (dynamic)

        // add condition for account id if it is present
        if(userId){
            collectionSql += ' AND account_id = ?';
            queryValues.push(userId);
        }

        // add condition for card id if it is present
        if(cardId){
            collectionSql += ' AND card_id = ?';
            queryValues.push(cardId);
        }   

        // add condition for collection id if it is present
        if(collectionId){
            collectionSql += ' AND collection_id = ?';
            queryValues.push(collectionId);
        }

        // run the query and return the result
        const result = await dbPool.query(collectionSql, [...queryValues])
        return result[0];

    } catch (error) {
        throw new Error(error.message);
    }
}; 

// add a new entry into the card collection table for a specific user and collection (or default collection if none specified)
const addCardCollectionEntry = async (userId, collectionId, cardId, copies, notes) => {
    try {
        // build sql string
        // unique constraint on the card_collection table will prevent duplicate entries. therefore can use insert ignore
        let cardCollectionSql = 'INSERT  INTO card_collection (collection_id, card_id, note, copies) VALUES (?, ?, ?, ?)';
 
        // if no collection id is specified we get the default collection id for the user and update that
        if(collectionId.length ===0){
            let collectionIdSQl = 'SELECT collection_id FROM collection WHERE account_id = ? AND is_default = 1';
            collectionId = await dbPool.query(collectionIdSQl, [userId]);
            collectionId = collectionId[0][0].collection_id;

        }

        // insert the new entry into the card_collection table
        const result = await dbPool.query(cardCollectionSql, [collectionId, cardId, notes, copies]);

        return result[0];

    } catch (error) {
        throw new Error(error.message);
    }
};

// add a new entry into the card collection table for a specific user and collection (or default collection if none specified)
const removeCardCollectionEntry = async (collectionId, cardId) => {
    try {
        // build sql string
        let deletecardCollectionSql = 'delete  from card_collection where collection_id = ? and card_id = ?';

        console.log(collectionId);
        console.log(cardId);
        // if no collection id is specified we get the default collection id for the user and update that
        // insert the new entry into the card_collection table
        const result = await dbPool.query(deletecardCollectionSql, [collectionId, cardId]);
        console.log(result[0]);
        return result[0];

    } catch (error) {
        throw new Error(error.message);
    }
};


// updates the number of copies for a specific entry in the card_collection table
const updateCollectionEntryCopies = async (userId, collectionId, cardId, copies) => {
    try {
        // check if there is an existing record for the user, collection and card
        let existingRecord = await getCollectionsCards(userId, cardId, collectionId);

        // perform the update if the record exists
        if(existingRecord.length > 0){
            let recordToUpdateId = existingRecord[0].entry_id;
            let updateSQL = 'UPDATE card_collection SET copies = ? WHERE card_collection_id = ?'; 
            await dbPool.query(updateSQL, [copies,recordToUpdateId]);
        }
       
    } catch (error) {
        throw new Error(error.message);
    }
}; 


// updates the notes for a specific entry in the card_collection table
const updateCollectionEntryNotes = async (userId, collectionId, cardId, notes) => {
    try {
        // check if a specific record exists for the user, collection and card
        let existingRecord = await getCollectionsCards(userId, cardId, collectionId);
        
        if(existingRecord.length > 0){
            // get existing notes and entry id
            let recordToUpdateId = existingRecord[0].entry_id;
            let existingNotes = existingRecord[0].note;

            // perform the update if the record exists and the notes are different
            if(existingRecord.length > 0 && existingNotes != notes){
                let updateSQL = 'UPDATE card_collection SET note = ? WHERE card_collection_id = ?'; 
                await dbPool.query(updateSQL, [notes,recordToUpdateId]);
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
}; 

// get all the cards in the default collection for a specific user
const getCardsInDefaultCollection = async (userId) => {
    try {
        let collectionSql = 'SELECT * from view_allcollectionsentries as t1 left join view_cardgridinformation as t2 on t1.card_id = t2.card_id WHERE account_id = ? AND is_default = 1';
        
        const result = await dbPool.query(collectionSql, [userId]);

        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};






module.exports = {
    createCollection,
    deleteCollection,
    getCollectionsCards,
    addCardCollectionEntry,
    removeCardCollectionEntry,
    updateCollectionEntryCopies,
    updateCollectionEntryNotes,
    getCardsInDefaultCollection,
    getAllCollections
};