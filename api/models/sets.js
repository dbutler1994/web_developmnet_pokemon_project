// get access to dbPool
const dbPool = require('../db/connect');

// Get all sets from the database
const getAllSets = async () => {

    let sql = 'select * from view_expansionsets;';

    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all sets from the database
const getSetById = async (setId) => {

    let sql = 'select * from view_expansionsets where release_set_id =?;';

    try {
        const result = await dbPool.query(sql, [setId]);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
     getAllSets,
     getSetById 
};