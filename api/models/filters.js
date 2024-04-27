// get access to dbPool
const dbPool = require('../db/connect');

// get all energy types from the database
const getEnergyTypes = async () => {
    // sql statement
    let sql = 'SELECT * FROM energy_type'

    // try and find the user
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
    let sql = 'SELECT * FROM evolution_stage';

    // try and find the user
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all evolution stages from the database
const getRarityTypes = async () => {
    // sql statement
    let sql = 'SELECT * FROM rarity';

    // try and find the user
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all evolution stages from the database
const getCardCategories = async () => {
    // sql statement
    let sql = 'SELECT * FROM category';

    // try and find the user
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