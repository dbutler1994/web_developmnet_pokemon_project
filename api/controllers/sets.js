const setsModel = require('../models/sets');


// get all cards from the database, and format the response
const getAllSets = async (req, res) => {
    // call the model function to retrieve all cards
    const result = await setsModel.getAllSets();


    // Send the retrieved sets as a response
    res.status(200).json(result);

};

module.exports = { 
    getAllSets 
};