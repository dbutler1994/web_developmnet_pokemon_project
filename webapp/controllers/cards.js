const axios = require('axios');

// get all cards from the API
const getAllCards = async (req, res) => {
    try {
        endPoint = 'http://localhost:4000/cards';
        let response = await axios.get(endPoint);
        let cardData = response.data;
        res.render('cardGrid', { cards: cardData});
    } catch (error) {
        console.error('Error fetching card data:', error.message);
        res.status(500).render('error');
    }
};

// get card by id from the API
const getCardById = async (req, res, next) =>{

    try {
        let cardId = req.params.id;
        let endPoint = `http://localhost:4000/cards/${cardId}`;
        const response = await axios.get(endPoint);
        const cardData = response.data;
        res.render('singleCard', { card: cardData});
    } catch (error) {
        next(error.response.statuscode);
    }    
};


module.exports ={
    getAllCards,
    getCardById
}