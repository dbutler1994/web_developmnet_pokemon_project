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

module.exports = {
     getAllSets
};