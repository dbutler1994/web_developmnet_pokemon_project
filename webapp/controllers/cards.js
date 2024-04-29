const axios = require('axios');
const filterController = require('./filters');
const filterDefinitions = require('../functions/filterKeys');
const constructUrlWithUserId = require('../functions/constructURLWithUserId');

// get all cards from the API
const getAllCards = async (req, res) => {
    try {
        // specify endpoint and add the userId to the endpoint along with the query parameters
        let endPoint = 'http://localhost:4000/cards' + req.paramString;
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        // get card data from the API
        let response = await axios.get(endPoint);
        
        // get card data and count data
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // get the cardsPerPage parameter value and page value from the request
        let pageSize = res.req.query.cardsPerPage || 30;
        let page = res.req.query.page || 1;

        //console.log(filterData);

        // render the card grid view
        res.render('cardGrid', { 
            cards: cardData, 
            totalCards: cardCount, 
            pageSize: pageSize, 
            page: page,
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys
        });


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
        res.render('singleCard', {
             card: cardData,
             filterKeys: filterDefinitions.filterKeys
        });
    } catch (error) {
        next(error.response.statuscode);
    }    
};


module.exports ={
    getAllCards,
    getCardById
}