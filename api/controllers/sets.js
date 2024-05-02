const setsModel = require('../models/sets');
const collectionsModel = require('../models/collections');

// get all sets from the database, and format the response
const getAllSets = async (req, res) => {
    try{
    // get the user id from the request
    const userId = req.query.userId;

    // call the model function to retrieve all sets
    const allSets = await setsModel.getAllSets();

    // if the user is logged in, get the user's collected cards from their owned / default collection and map to the sets. Get a count to see how many cards the user has collected in each set
    if(userId){
        const userCollected = await collectionsModel.getCardsInDefaultCollection(userId);
        
        allSets.forEach(set => {
            // get the cards the user has collected in the current set            
            const cardsInSet = userCollected.filter(card => card.set_code === set.set_code && card.copies > 0);

            // count the cards from above step
            const count = cardsInSet.length;

            // add count property to the set object  
            set.userCollectedCount = count;
        });

    }
    if(allSets.length === 0){
        res.status(500).json({message: 'No sets found.'});
    } else{
        // Send the retrieved sets as a response
        res.status(200).json(allSets);
    }

    } catch (error) {
        console.error("Error getting sets:", error);
        res.status(500).json({error : "Internal Server Error"}  );
    }
};

// get set by id from the database, and format the response
const getSetById = async (req, res) => {
    try{
        // get the user id from the request
        const userId = req.query.userId;
        const setId = req.params.setId;

        // call the model function to retrieve all cards
        const allSets = await setsModel.getSetById(setId);

        // get the user's collected cards
        if(userId){
            const userCollected = await collectionsModel.getCardsInDefaultCollection(userId);
            
            allSets.forEach(set => {
                // get the cards the user has collected in the current set            
                const cardsInSet = userCollected.filter(card => card.set_code === set.set_code && card.copies > 0);

                // count the cards from above step
                const count = cardsInSet.length;

                // add count property to the set object  
                set.userCollectedCount = count;
            });
        }

        if(allSets.length === 0){
            res.status(500).json({message: 'No sets found.'});
        } else{
            // Send the retrieved sets as a response
            res.status(200).json(allSets);
        }
    } catch (error) {
        console.error("Error getting set:", error);
        res.status(500).json({error : "Internal Server Error"}  );
    }
};

module.exports = { 
    getAllSets,
    getSetById
};