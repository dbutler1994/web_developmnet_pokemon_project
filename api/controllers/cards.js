const cardsModel = require('../models/cards');
const cardFunctions = require('../js/cardFunctions');
const { get } = require('../routes/cards');


// get all cards from the database, and format the response
const getAllCards = async (req, res) => {
    // call the model function to retrieve all cards
    const result = await cardsModel.getAllCards();
    console.log(result);


    // for each card in result array create a URL for the card image
    const resultWithImage = result.map(card => {
        const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');

        // return new object with  card data and specific image URL
        return {
            ...card,
            image: imageURL,
        };
    });


    // for each card create a set object with set name, code and total cards
    const resultWithSet = result.map(card => {
        const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');

        // return new object with  card data and set data
        return {
            ...card,
            set: cardFunctions.formatSetInformation(card.set_name, card.set_code, card.release_set_total_cards)
        };
    });

    // setup json object to send to client
    const jsonResponse = {
        card_id: resultWithSet.card_id,
        card_name: resultWithSet.card_name,
        card_number: resultWithSet.card_number,
        set: resultWithSet.set,
        image: resultWithSet.image
    };

    

    // Send the retrieved cards as a response
    res.status(200).json(resultWithSet);

};

// get all details required for a single card and format the response
const getSingleCard = async (req, res) => {
    const cardId = req.params.cardId;

    try {
        // Get the card details from the model
        const cardDetails = await cardsModel.getSingleCard(cardId);

        // if no card details are found, return a not found error and abort
        if(!cardDetails){
            res.status(404).json({error: "Card not found"});
            return;
        }

        // Get the energy type, attacks, weakness and resistance details from the model
        const cardEnergyType = await cardsModel.getSingleCardEnergyType(cardId);
        const cardAttacks = await cardsModel.getSingleCardAttacks(cardId);
        const cardWeakness = await cardsModel.getSingleCardWeakness(cardId);
        const cardResistance = await cardsModel.getSingleCardResistance(cardId);

        // format returrned data
        const formattedAttacks = await cardFunctions.formatCardAttacks(cardAttacks);

        // setup response object
        const jsonResponse = {
            card_name: cardDetails.card_name,
            card_number: cardDetails.card_number,
            rarity: cardDetails.rarity,
            set: cardFunctions.formatSetInformation(cardDetails.release_set_name, cardDetails.release_set_code, cardDetails.release_set_total_cards),
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