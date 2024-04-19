const cardsModel = require('../models/cards');
const cardFunctions = require('../js/cardFunctions');


// get all cards from the database, and format the response
const getAllCards = async (req, res) => {
    // call the model function to retrieve all cards
    const result = await cardsModel.getAllCards();

    // format the response and add necessary objects such as rarity and set info
    const jsonResponse= result.map(card => {
        const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');

        return {
            card_id: card.card_id,
            card_number: card.card_number,
            card_name: card.card_name,
            set: cardFunctions.formatSetInformation(card.set_name, card.set_code, card.release_set_total_cards),
            rarity: cardFunctions.formatRarityInformation(card.rarity, card.rarity_icon_url),
            image: imageURL
        };
    })
    
    // Send the retrieved cards as a response
    res.status(200).json(jsonResponse);

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
        const cardRetreat = await cardsModel.getSingleCardRetreat(cardId);
        const cardAbility  = await cardsModel.getSingleCardAbility(cardId);

        // format returrned data
        const formattedAttacks = await cardFunctions.formatCardAttacks(cardAttacks);

        // setup response object
        const jsonResponse = {
            card_name: cardDetails.card_name,
            card_number: cardDetails.card_number,
            category: cardDetails.category,
            rarity: cardFunctions.formatRarityInformation(cardDetails.rarity, cardDetails.rarity_icon_url),
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
            jsonResponse.attack = formattedAttacks;
        }

        // add weakess if there are any
        if (cardWeakness.length > 0) {
            jsonResponse.weakness = cardWeakness;
        }

        // add resistance if there are any
        if (cardResistance.length > 0) {
            jsonResponse.resistance = cardResistance;
        }

        // add retreat cost if there are any
        if (cardRetreat.length > 0) {
            jsonResponse.retreat_cost = cardRetreat;
        }

        // add ability if there are any
        if (cardAbility.length > 0) {
            jsonResponse.ability = cardAbility;
        }

        res.json(jsonResponse);
    } catch (error) {
        console.error("Error retrieving card details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};





module.exports = { getAllCards, getSingleCard };