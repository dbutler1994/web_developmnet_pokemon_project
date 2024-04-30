const setsModel = require('../models/sets');
const collectionsModel = require('../models/collections');

// get all cards from the database, and format the response
const getAllSets = async (req, res) => {
    // get the user id from the request
    const userId = req.userId;

    // call the model function to retrieve all cards
    const allSets = await setsModel.getAllSets();

    // get the user's collected cards
    if(userId){
        const userCollected = await collectionsModel.getCardsInDefaultCollection(userId);
        
        allSets.forEach(set => {
            // get the cards the user has collected in the current set            
            const cardsInSet = userCollected.filter(card => card.set_code === set.code);

            // count the cards from above step
            const count = cardsInSet.length;

            // add count property to the set object  
            set.userCollectedCount = count;
        });

    }
    

    

    // Send the retrieved sets as a response
    res.status(200).json(allSets);

};

module.exports = { 
    getAllSets 
};