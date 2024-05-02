const expansionsModel = require('../models/expansion');
const expansionsFunctions = require('../js/expansionFunctions');
const collectionsModel = require('../models/collections');


// get all expansions from the database, and format the response. Optionally include set information for each expansion
const getAllExpansions = async (req, res) => {
    try{
        // get query parameters
        const includeSets = (req.query.includeSets === 'true');
        const userId = req.query.userId;

        // call the model to retrieve all expansions
        const allExpansions = await expansionsModel.getAllExpansions(includeSets);
        let jsonResponse= allExpansions;

        //construct the response based on whether we need to present set information
        if(includeSets){
            jsonResponse = expansionsFunctions.setsByExpansion(allExpansions); // construct json object with expansions and sets
        } else{
            jsonResponse= allExpansions.map(expansion => {
                return expansionsFunctions.formatNewExpansion(expansion, false); // construct json object with expansions only
            })
        }

        //get the user's collected cards and add the count to the response
        if(userId && includeSets){
            const userCollected = await collectionsModel.getCardsInDefaultCollection(userId);
        
            jsonResponse[0].sets.forEach(set => {
                // get the cards the user has collected in the current set            
                const cardsInSet = userCollected.filter(card => card.set_code === set.code && card.copies > 0);

                // count the cards from above step
                const count = cardsInSet.length;

                // add count property to the set object  
                set.userCollectedCount = count;
            });

        }

        if(jsonResponse.length != 0){
            res.status(200).json(jsonResponse);
        } else {
            res.status(500).json({message: 'No expansions found.'});
        }
        
    } catch (error) {
        console.error("Error getting expansions:", error);
        res.status(500).json({error : "Internal Server Error"}  );
    }



};


module.exports = { 
    getAllExpansions
};