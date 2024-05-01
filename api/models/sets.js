// get access to dbPool
const dbPool = require('../db/connect');

// Get all sets from the database
const getAllSets = async () => {
    // sql statement
    let sql = 'select * from view_expansionsets;';

    // query the database and return the result
    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all sets from the database, and filter by the setId
const getSetById = async (setId) => {
    // sql statement
    let sql = 'select * from view_expansionsets where release_set_id =?;';

    // query the database and return the result
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