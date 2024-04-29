// get access to dbPool
const dbPool = require('../db/connect');


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

// get the collection data by user id
const getCollectionsCards = async (userId, cardId) => {
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

        const result = await dbPool.query(collectionSql, [...queryValues]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}; 



module.exports = {
    createCollection,
    getCollectionsCards
};