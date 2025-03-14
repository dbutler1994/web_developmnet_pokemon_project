// get access to dbPool
const dbPool = require('../db/connect');

// get all energy types from the database
const getEnergyTypes = async () => {
    // sql statement
    let sql = 'select energy_type_id as id, name, icon_url from energy_type;'

    // query the database and return the result
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all evolution stages from the database
const getEvolutionStages = async () => {
    // sql statement
    let sql = 'SELECT evolution_stage_id as id, name from evolution_stage;';

    // query the database and return the result
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all rarity types from the database
const getRarityTypes = async () => {
    // sql statement
    let sql = 'select rarity_id as id, name, icon_url from rarity;';

    // query the database and return the result
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all card category types from the database
const getCardCategories = async () => {
    // sql statement
    let sql = 'SELECT category_id as id, name FROM category';

    // query the database and return the result
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getEnergyTypes,
    getEvolutionStages,
    getRarityTypes,
    getCardCategories
};