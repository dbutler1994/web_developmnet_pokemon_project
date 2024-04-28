// get access to dbPool
const dbPool = require('../db/connect');
const constructFilterWhereClause = require('../js/constructFIlterWhereClause');

// Get all cards from the database
const getAllCards = async (startIndex, cardsPerPage, sortBy, releaseSort, filterParams) => {

    // SQL to get the total number of cards
    let countSQL = 'SELECT COUNT(Distinct card_id) as totalCards FROM view_CardGridInformation WHERE 1=1';

    // SQL to get all cards
    let cardsSQL = 'SELECT card_id, '
    cardsSQL += 'MIN(card_number) as card_number, ' 
    cardsSQL += 'MIN(name) as card_name, ' 
    cardsSQL += 'MIN(rarityId) as rarity_id, '
    cardsSQL += 'MIN(rarity) as rarity, '
    cardsSQL += 'MIN(rarity_icon_url) as rarity_icon_url, '
    cardsSQL += 'MIN(set_name) as set_name, '
    cardsSQL += 'MIN(set_code) as set_code, '
    cardsSQL += 'MIN(release_set_total_cards)  as release_set_total_cards, '
    cardsSQL += 'MIN(expansion_api_id) as expansion_api_id, '
    cardsSQL += 'MIN(release_set_api_id) as release_set_api_id '
    cardsSQL += 'FROM view_cardgridinformation '
    cardsSQL += 'WHERE 1=1 ' // initial where clause
    
    // add the filter parameters to the SQL statement
    const whereClause = constructFilterWhereClause.constructFilterWhereClause(filterParams);
    cardsSQL += whereClause.whereClause;
    countSQL += whereClause.whereClause;

    // add group by clause to the SQL statement
    cardsSQL += ' GROUP BY card_id';
    

    // add the order by an limit clauses to the SQL statement
    cardsSQL += getOrderByString(sortBy, releaseSort);
    cardsSQL += ' LIMIT ?, ?';
    //console.log(cardsSQL);

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

// generate the order by string 
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

// Get the energy type details of a single card
const getSingleCardEnergyType = async (cardId) => {

    let sql = 'SELECT * FROM view_cardEnergyType  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the attack  details of a single card
const getSingleCardAttacks = async (cardId) => {

    let sql = 'SELECT * FROM view_cardAttack  WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the resistance details of a single card
const getSingleCardResistance = async (cardId) => {

    let sql = 'SELECT energy_type_id, energy_type, icon_url, value from view_cardResistance WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the weakness details of a single card
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



module.exports = {
     getAllCards, 
     getSingleCard, 
     getSingleCardEnergyType, 
     getSingleCardAttacks, 
     getSingleCardResistance, 
     getSingleCardWeakness, 
     getSingleCardRetreat,
     getSingleCardAbility
};