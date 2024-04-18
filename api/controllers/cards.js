const cardsModel = require('../models/cards');
const cardFunctions = require('../js/cardFunctions');


// get all cards from the database, and format the response
const getAllCards = async (req, res) => {
    // call the model function to retrieve all cards
    const result = await cardsModel.getAllCards();


    // for each card in result array create a URL for the card image
    const resultWithImage = result.map(card => {
        const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');

        // return new object with  card data and specific image URL
        return {
            ...card,
            image: imageURL
        };
    });

    // Send the retrieved cards as a response
    res.status(200).json(resultWithImage);

};

// get all details required for a single card and format the response
const getSingleCard = async (req, res) => {
    const cardId = req.params.cardId;

    try {
        // Get the necessary card details from the model
        const cardDetails = await cardsModel.getSingleCard(cardId);
        const cardEnergyType = await cardsModel.getSingleCardEnergyType(cardId);
        const cardAttacks = await cardsModel.getSingleCardAttacks(cardId);
        const cardWeakness = await cardsModel.getSingleCardWeakness(cardId);
        const cardResistance = await cardsModel.getSingleCardResistance(cardId);

        //console.log(cardAttacks);

        // format returrned data
        const formattedAttacks = await cardFunctions.formatCardAttacks(cardAttacks);

        // setup response object
        const jsonResponse = {
            card_name: cardDetails.card_name,
            card_number: cardDetails.card_number,
            rarity: cardDetails.rarity,
            illustrator: cardDetails.illustrator,
            energy: cardEnergyType,
            health: cardDetails.health,
            evolution_stage_name: cardDetails.evolution_stage_name,
            evolves_from: cardDetails.evolves_from,
            image: cardFunctions.createCardURL(cardDetails.expansion_api_id, cardDetails.release_set_api_id, cardDetails.card_number, 'high'),
        };

        // add attacks if there are any
        if (formattedAttacks.length > 0) {
            jsonResponse.attacks = formattedAttacks;
        }

        // add weakess if there are any
        if (cardWeakness.length > 0) {
            jsonResponse.weakness = cardWeakness;
        }

        // add resistance if there are any
        if (cardResistance.length > 0) {
            jsonResponse.resistance = cardResistance;
        }


        res.json(jsonResponse);
    } catch (error) {
        console.error("Error retrieving card details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};





module.exports = { getAllCards, getSingleCard };