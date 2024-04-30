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

        const config = {headers: res.customHeaders};

        // get card data from the API
        let response = await axios.get(endPoint, config);
        
        // get card data and count data
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // get the cardsPerPage parameter value and page value from the request
        let pageSize = res.req.query.cardsPerPage || 30;
        let page = res.req.query.page || 1;

        // render the card grid view
        res.render('cardGrid', { 
            cards: cardData, 
            totalCards: cardCount, 
            pageSize: pageSize, 
            page: page,
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys,
            content: 'all'
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
        const config = {headers: res.customHeaders};

        const response = await axios.get(endPoint,config);
        const cardData = response.data;
        res.render('singleCard', {
             card: cardData,
             filterKeys: filterDefinitions.filterKeys
        });
    } catch (error) {
        next(error.response.statuscode);
    }    
};


const getCardsBySetId = async (req, res) => {
    try {
        // setup parameters and endpoint
        let setId = req.params.id;
        let endPoint = `http://localhost:4000/cards/sets/${setId}` + req.paramString;
        let setEndPoint = `http://localhost:4000/sets/${setId}`;

        const config = {headers: res.customHeaders};

        // get card data from the API
        const response = await axios.get(endPoint, config);
        const cardData = response.data.cardData;

        // get set data from the API
        const setResponse = await axios.get(setEndPoint, config);
        const setData = setResponse.data[0];

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // render the card grid view with the appropriate content
        res.render('cardGrid', { 
            cards: cardData, 
            content: 'set',
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys,
            totalCards: cardData.length,
            set: setData});

    } catch (error) {
        console.error('Error fetching card data:', error.message);
        res.status(500).render('error');
    }
};

module.exports ={
    getAllCards,
    getCardById,
    getCardsBySetId
}