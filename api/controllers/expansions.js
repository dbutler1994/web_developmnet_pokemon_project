const exp = require('constants');
const expansionsModel = require('../models/expansion');
const setsModel = require('../models/sets');
const expansionsFunctions = require('../js/expansionFunctions');

// get all cards from the database, and format the response
const getAllExpansions = async (req, res) => {

    // get query parameters
    const includeSets = (req.query.includeSets === 'true');

    // call the model to retrieve all expansions
    const allExpansions = await expansionsModel.getAllExpansions(includeSets);
    console.log(allExpansions);
    let jsonResponse= allExpansions;

    //construct the response based on whether we need to present set information
    if(includeSets){
        jsonResponse = expansionsFunctions.setsByExpansion(allExpansions); // construct json object with expansions and sets
    } else{
        jsonResponse= allExpansions.map(expansion => {
            return expansionsFunctions.formatNewExpansion(expansion, false); // construct json object with expansions only
        })
    }
        
    // Send the  response
    res.status(200).json(jsonResponse);

};

module.exports = { getAllExpansions };