// get access to dbPool
const dbPool = require('../db/connect');

// Get all cards from the database
const getAllCards = async (startIndex, cardsPerPage, sortBy, releaseSort) => {

    let cardsSQL = 'SELECT * FROM view_CardGridInformation ';
    let countSQL = 'SELECT COUNT(*) as totalCards FROM view_CardGridInformation';

    cardsSQL += getOrderByString(sortBy, releaseSort);
    cardsSQL += ' LIMIT ?, ?';
    //console.log(cardsSQL);

    try {
        // get the total number of cards and all cards
        const cardsResult = await dbPool.query(cardsSQL, [startIndex, cardsPerPage]);
        const countResult = await dbPool.query(countSQL);
        
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

    let sql = 'SELECT * FROM view_cardResistance WHERE card_id = ?'

    try {
        const result = await dbPool.query(sql, [cardId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
}


// Get the weakness details of a single card
const getSingleCardWeakness = async (cardId) => {

    let sql = 'SELECT * FROM view_cardWeakness  WHERE card_id = ?'

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