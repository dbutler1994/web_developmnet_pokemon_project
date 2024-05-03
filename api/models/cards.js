// get access to dbPool
const dbPool = require('../db/connect');
const constructFilterWhereClause = require('../js/constructFIlterWhereClause');

// Get all cards sql (aggregate functions used to enseure unique cards are returned......thinking about potential issues where a specific card may have multiple
// eneergy types, weakenesses etc. in the future)
const cardsSQLAggregate = () => {
    // SQL to get all cards
    let cardsSQL = `SELECT card_id,
    MIN(card_number) as card_number, 
    MIN(name) as card_name, 
    MIN(rarityId) as rarity_id,
    MIN(rarity) as rarity,
    MIN(rarity_icon_url) as rarity_icon_url,
    MIN(set_name) as set_name,
    MIN(set_code) as set_code,
    MIN(release_set_total_cards)  as release_set_total_cards,
    MIN(expansion_api_id) as expansion_api_id, 
    MIN(release_set_api_id) as release_set_api_id
    FROM view_cardgridinformation
    WHERE 1=1 `; 

    return cardsSQL;
}


// Get all cards from the database. Allows for pagination, sorting and filtering. Also returns the total number of cards found.
const getAllCards = async (startIndex, cardsPerPage, sortBy, releaseSort, filterParams) => {

    // SQL to get the total number of cards
    let countSQL = 'SELECT COUNT(Distinct card_id) as totalCards FROM view_CardGridInformation WHERE 1=1';

    // SQL to get all cards
    let cardsSQL = cardsSQLAggregate();
    
    // add the filter parameters to the SQL statement
    const whereClause = constructFilterWhereClause.constructFilterWhereClause(filterParams);
    cardsSQL += whereClause.whereClause;
    countSQL += whereClause.whereClause;

    // add group by clause to the SQL statement
    cardsSQL += ' GROUP BY card_id';
    
    // add the order by and limit clauses to the SQL statement
    cardsSQL += getOrderByString(sortBy, releaseSort);
    cardsSQL += ' LIMIT ?, ?';

    try {
        // get the total number of cards and all cards
        const cardsResult = await dbPool.query(cardsSQL, [...whereClause.values, startIndex, cardsPerPage]);
        const countResult = await dbPool.query(countSQL, [...whereClause.values]);
        
        return{
            totalCards: countResult[0][0],
            cards: cardsResult[0]
        } ;

    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all cards from the database and sort by a specific set id. Allows for pagination and sorting. Also returns the total number of cards found.
const getCardsBySetId = async (setId, sortBy, filterParams) => { 
    // SQL to get all cards amd add the set id to the where clause
    let cardsSQL = cardsSQLAggregate();
    cardsSQL += ' AND release_set_id = ?';

    // add the filter parameters to the SQL statement
    const whereClause = constructFilterWhereClause.constructFilterWhereClause(filterParams);
    cardsSQL += whereClause.whereClause;

    // add group by clause to the SQL statement (reuquired to ensure unique cards are returned)
    cardsSQL += ' GROUP BY card_id';

    // add the order by clause to the SQL statement
    console.log(sortBy);
    cardsSQL += getOrderByString(sortBy);

    try {
        // get the matching cards from teh database
        const cardsResult = await dbPool.query(cardsSQL, [setId,...whereClause.values]);
        
        return{
            cards: cardsResult[0]
        } ;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Get all cards from the database and sort by a specific collection id. Allows for pagination, filtering  and sorting. Also returns the total number of cards found.
// Could argue that this is similar to getAllCards, and could be refactored to use that function with a collectionId parameter.
const getCardsByCollectionId = async (collectionId, startIndex, cardsPerPage, sortBy, releaseSort, filterParams) => {
    // SQL to get the total number of cards
    let countSQL = 'select COUNT(*) as totalCards from  view_allcollectionsentries t1 left JOIN view_cardgridinformation t2 on t1.card_id = t2.card_id where t1.collection_id  =?';

    // SQL to get all cards, filter by collection id
    let cardsSQL = 'select t2.name as card_name, t2.* from  view_allcollectionsentries t1 left JOIN view_cardgridinformation t2 on t1.card_id = t2.card_id where t1.collection_id  =? and copies >0';
    
    // add the filter parameters to the SQL statement
    const whereClause = constructFilterWhereClause.constructFilterWhereClause(filterParams);
    cardsSQL += whereClause.whereClause;
    countSQL += whereClause.whereClause;

    // add the order by an limit clauses to the SQL statement
    cardsSQL += getOrderByString(sortBy, releaseSort);
    cardsSQL += ' LIMIT ?, ?';

    try {
        // get the total number of cards and all cards
        const cardsResult = await dbPool.query(cardsSQL, [collectionId,...whereClause.values, startIndex, cardsPerPage]);
        const countResult = await dbPool.query(countSQL, [collectionId,...whereClause.values]);
        
        return{
            totalCards: countResult[0][0],
            cards: cardsResult[0]
        } ;
    } catch (error) {
        throw new Error(error.message);
    }

}

// function to  generate the order by string 
const getOrderByString =  (sortBy, releaseSort) => {
    let orderString = ' ';
    
    // figure out the order by clause based on the sortBy parameter
    switch (sortBy) {
        
        case 'name_asc':
            orderString += 'ORDER BY name ASC';
            break;
        case 'name_desc':
            orderString += 'ORDER BY name DESC';
            break;
        case 'card_number_asc':
            orderString += 'ORDER BY card_number ASC';
            break;
        default:
            orderString += 'ORDER BY card_number ASC'; // default to card_number if not specified 
    }

    // add on second order sort for the release date. protect against SQL injection by only allowing ASC or DESC
    if(releaseSort === 'ASC' || releaseSort === 'DESC'){
        orderString += ', release_date ' + releaseSort;    
    }
    
    return orderString;
}


// Get the details of a single card
const getSingleCard = async (cardId) => {

    let sql = 'SELECT * FROM view_cardDetails  WHERE card_id = ?'
    
    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0][0];
    } catch (error) {
        throw new Error(error.message);
    }
}

// Get the energy type details of a single card (can return multiple energy types)
const getSingleCardEnergyType = async (cardId) => {

    let sql = 'SELECT * FROM view_cardEnergyType  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the attack details of a single card (can return multiple attacks)
const getSingleCardAttacks = async (cardId) => {

    let sql = 'SELECT * FROM view_cardAttack  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the resistance details of a single card (can return multiple resistances)
const getSingleCardResistance = async (cardId) => {

    let sql = 'SELECT energy_type_id, energy_type, icon_url, value from view_cardResistance WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the weakness details of a single card (can return multiple weaknesses)
const getSingleCardWeakness = async (cardId) => {

    let sql = 'SELECT energy_type_id, energy_type, icon_url, value FROM view_cardWeakness  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the retreat cost details of a single card
const getSingleCardRetreat = async (cardId) => {

    let sql = 'SELECT * FROM view_cardRetreatCost  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}

// Get the retreat cost details of a single card
const getSingleCardAbility = async (cardId) => {

    let sql = 'SELECT * FROM view_cardAbility  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}

// Export the functions
module.exports = {
     getAllCards, 
     getSingleCard, 
     getSingleCardEnergyType, 
     getSingleCardAttacks, 
     getSingleCardResistance, 
     getSingleCardWeakness, 
     getSingleCardRetreat,
     getSingleCardAbility,
     getCardsBySetId,
     getCardsByCollectionId
};