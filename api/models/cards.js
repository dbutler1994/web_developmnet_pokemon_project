// get access to dbPool
const dbPool = require('../db/connect');

// Get all cards from the database
const getAllCards = async () => {
    try {
        const result = await dbPool.query('SELECT * FROM view_CardGridInformation');
        console.log(result);
        return result[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {getAllCards};