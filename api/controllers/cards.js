const cardsModel = require('../models/cards');
const cardFunctions = require('../js/cardFunctions');
const queryParamFunctions = require('../js/queryParamFunctions');
const wishlistModel = require('../models/wishlist');
const collectionModel = require('../models/collections');
const collectionFunctions = require('../js/collectionFunctions');

// get all cards from the database, and format the response
const getAllCards = async (req, res) => {
    try{
        // see if the collection is in the query
        const collectionId = req.params.collectionId;
        const userId = req.query.userId;

        // get pagination details from the request
        const page = parseInt(req.query.page) || 1; //  default to 1 if not specified
        
        const cardsPerPage = parseInt(req.query.cardsPerPage) || 30; // default to 30 if not specified
        const sortBy = req.query.sortBy || 'card_number'; // default to card_number if not specified
        const releaseSort = req.query.releaseDateSort || 'ASC'; // default to ASC if not specified

        const filterParams = queryParamFunctions.getFilterParams(req.query); // get filter parameters from the query

        // calculate the start index for the query
        const startIndex = (page - 1) * cardsPerPage; // figure out first card to retrieve

        let result;
        // assess if the user has requested all cards or cards from a specific collection and retrieve the cards accordingly
        if(!collectionId){
            result = await cardsModel.getAllCards(startIndex, cardsPerPage, sortBy, releaseSort, filterParams);
        } else {   
            result = await cardsModel.getCardsByCollectionId(collectionId,startIndex, cardsPerPage, sortBy, releaseSort, filterParams);
        }

        // get the wishlist for the user if they are logged in
        const wishlist = userId ? await wishlistModel.getWishlist(userId) : [];

        // get the collections for the user if they are logged in
        const collectedCards = userId ? await collectionModel.getCollectionsCards(userId) : [];
        const collectedCardsGroupedById = collectionFunctions.formatCollectionsData(collectedCards);

        // Create a Set of card IDs present in the wishlist
        const wishlistCardIds = new Set(wishlist.map(item => item.card_id));

        // format the response and add necessary objects such as rarity and set info
        const jsonResponse= result.cards.map(card => {
            const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');
            const isInWishlist = wishlistCardIds.has(card.card_id);
            return {
                card_id: card.card_id,
                card_number: card.card_number,
                card_name: card.card_name,
                set: cardFunctions.formatSetInformation(card.set_name, card.set_code, card.release_set_total_cards),
                rarity: cardFunctions.formatRarityInformation(card.rarity_id, card.rarity, card.rarity_icon_url),
                image: imageURL,
                wishlist: isInWishlist,
                collections: collectedCardsGroupedById[card.card_id] || { defaultCollection: [], customCollections: [] }
            };
        })

        // Send the retrieved cards as a response
        res.status(200).json({
            summaryData: result.totalCards,
            cardData: jsonResponse
        });
    } catch (error) {
        console.error("Error retrieving all cards:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// get all cards from the database for a given set id, and format the response
const getCardsBySetId = async (req, res) => {
    try{
        // get ordering and filter details from the request
        console.log(req.query.sortBy)
        const sortBy = req.query.sortBy || 'card_number'; // default to card_number if not specified
        const setId = req.params.setId;
        const filterParams = queryParamFunctions.getFilterParams(req.query);

        // get user id from the query
        const userId = req.query.userId;
        console.log(userId);

        // call the model function to retrieve all cards
        const result = await cardsModel.getCardsBySetId(setId, sortBy, filterParams);

        // get the wishlist for the user if they are logged in
        const wishlist = userId ? await wishlistModel.getWishlist(userId) : [];

        // get the collections for the user if they are logged in
        const collectedCards = userId ? await collectionModel.getCollectionsCards(userId) : [];
        console.log(collectedCards);
        const collectedCardsGroupedById = collectionFunctions.formatCollectionsData(collectedCards);

        // Create a Set of card IDs present in the wishlist
        const wishlistCardIds = new Set(wishlist.map(item => item.card_id));
        
        // format the response and add necessary objects such as rarity and set info
        const jsonResponse= result.cards.map(card => {
            const imageURL = cardFunctions.createCardURL(card.expansion_api_id, card.release_set_api_id, card.card_number, 'low');
            const isInWishlist = wishlistCardIds.has(card.card_id);


            return {
                card_id: card.card_id,
                card_number: card.card_number,
                card_name: card.card_name,
                set: cardFunctions.formatSetInformation(card.set_name, card.set_code, card.release_set_total_cards),
                rarity: cardFunctions.formatRarityInformation(card.rarity_id, card.rarity, card.rarity_icon_url),
                image: imageURL,
                wishlist: isInWishlist,
                collections: collectedCardsGroupedById[card.card_id] || { defaultCollection: [], customCollections: [] }
            };
        })
    
        // Send the retrieved cards as a response
        res.status(200).json({
            cardData: jsonResponse
        });
    } catch (error) {
        console.error("Error retrieving cards by set id:", error);
        res.status(500).json({ error: "Internal server error" });
    }


};

// get all details required for a single card and format the response
const getSingleCard = async (req, res) => {
    try {
        const cardId = req.params.cardId;
        const userId = req.query.userId;  

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

        // get the wishlist for the user if they are logged in
        const wishlist = userId ? await wishlistModel.getWishlist(userId, cardId) : [];
        const wishlistCardIds = new Set(wishlist.map(item => item.card_id));
        const isInWishlist = wishlistCardIds.has(parseInt(cardId));

        // get the collections for the user if they are logged in
        const collectedCards = userId ? await collectionModel.getCollectionsCards(userId, cardId) : [];

        const collectedCardsGroupedById = collectionFunctions.formatCollectionsData(collectedCards);


        // setup response object
        const jsonResponse = {
            card_id: cardDetails.card_id,
            card_name: cardDetails.card_name,
            card_number: cardDetails.card_number,
            category : cardFunctions.formatCategoryInformation(cardDetails.category_id, cardDetails.category_name),
            rarity: cardFunctions.formatRarityInformation(cardDetails.rarity_id, cardDetails.rarity, cardDetails.rarity_icon_url),
            set: cardFunctions.formatSetInformation(cardDetails.release_set_name, cardDetails.release_set_code, cardDetails.release_set_total_cards),
            illustrator: cardDetails.illustrator,
            energy: cardEnergyType,
            health: cardDetails.health,
            evolution : cardFunctions.formatEvolutionInformation(cardDetails.evolution_stage_id, cardDetails.evolution_stage_name, cardDetails.evolves_from),
            image: cardFunctions.createCardURL(cardDetails.expansion_api_id, cardDetails.release_set_api_id, cardDetails.card_number, 'high'),
            wishlist: isInWishlist,
            collections: collectedCardsGroupedById[cardDetails.card_id] || { defaultCollection: [], customCollections: [] }
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

        res.status(200).json({
            cardData: jsonResponse
        });

    } catch (error) {
        console.error("Error retrieving card details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = { 
    getAllCards, 
    getSingleCard, 
    getCardsBySetId 
};