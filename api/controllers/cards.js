const cardsModel = require('../models/cards');

const getAllCards = async (req, res) => {
     // call the model function to retrieve all cards
     const result = await cardsModel.getAllCards();

    // map the image url for each card
    const cards = result.map(row => ({
        ...row,
        image: `https://assets.tcgdex.net/en/${row.expansion_api_id}/${row.release_set_api_id}/${row.card_number}/low.webp`
    }));

     // Send the retrieved cards as a response
     res.status(200).json(cards);

};

module.exports = {getAllCards};