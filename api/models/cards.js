// get access to dbPool
const dbPool = require('../db/connect');

// Get all cards from the database
const getAllCards = async () => {

    let sql = 'SELECT * FROM view_CardGridInformation';

    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

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