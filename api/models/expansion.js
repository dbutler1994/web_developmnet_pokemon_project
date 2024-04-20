// get access to dbPool
const dbPool = require('../db/connect');

// Get all expansions from the database (optionally including set information)
const getAllExpansions = async (includeSets) => {

    let sql = '';
    // set query string based on whether we need set information
    if(includeSets){
        sql += 'select * from view_ExpansionSets;';
    } else{
        sql += 'select DISTINCT expansion_id, expansion_name from view_expansionsets;';
    }

    try {
        const result = await dbPool.query(sql);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
     getAllExpansions
};