const axios = require('axios');
const filterController = require('./filters');
const filterDefinitions = require('../functions/filterKeys');
const constructUrlWithUserId = require('../functions/constructURLWithUserId');
const constants = require('../config/config');


// get all cards from the API
const getAllCards = async (req, res) => {
    try {
        // specify endpoint and add the userId to the endpoint along with the query parameters
        let endPoint = `${constants.API_ROOT_URL}/cards`  + req.paramString;
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        const config = {headers: res.customHeaders};

        // get card data from the API
        let response = await axios.get(endPoint, config);
        
        // get card data and count data
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // let collection endpooint
        let collectionEndPoint = `${constants.API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);

        // get the cardsPerPage parameter value and page value from the request
        let pageSize = res.req.query.cardsPerPage || 30;
        let page = res.req.query.page || 1;

        // get the target collection from the request
        let collectionId = res.req.query.collection || undefined;

        // add targetCollection property to each card object
        cardData.forEach(card => {
            if (card.collections && collectionId) {
                const defaultCollection = card.collections.defaultCollection.find(collection => collection.collection_id === collectionId);
                const customCollection = card.collections.customCollections.find(collection => collection.collection_id === collectionId);
                card.targetCollection = defaultCollection || customCollection || null;
            } else {
                card.targetCollection = card.collections.defaultCollection[0];
            }
        });


        // render the card grid view
        res.render('cardGrid', { 
            cards: cardData, 
            totalCards: cardCount, 
            pageSize: pageSize, 
            page: page,
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys,
            collectionList: collectionResponse.data,
            content: 'all',
            
        });


    } catch (error) {
        console.error('Error fetching card data:', error.message);
        res.status(500).render('error');
    }
};


// get all cards from the API
const getAllCardsByCollectionId = async (req, res) => {
    try {
        // specify endpoint and add the userId to the endpoint along with the query parameters
        let endPoint = `${constants.API_ROOT_URL}/cards/collections/${req.params.collectionId}`  + req.paramString;
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        const config = {headers: res.customHeaders};

        // get card data from the API
        let response = await axios.get(endPoint, config);
        
        // get card data and count data
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // let collection endpooint
        let collectionEndPoint = `${constants.API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);

        // get the cardsPerPage parameter value and page value from the request
        let pageSize = res.req.query.cardsPerPage || 30;
        let page = res.req.query.page || 1;

        // get the target collection from the request
        let collectionId = res.req.query.collection || undefined;

        // add targetCollection property to each card object
        cardData.forEach(card => {
            if (card.collections && collectionId) {
                const defaultCollection = card.collections.defaultCollection.find(collection => collection.collection_id === collectionId);
                const customCollection = card.collections.customCollections.find(collection => collection.collection_id === collectionId);
                card.targetCollection = defaultCollection || customCollection || null;
            } else {
                card.targetCollection = card.collections.defaultCollection[0];
            }
        });


        // render the card grid view
        res.render('cardGrid', { 
            cards: cardData, 
            totalCards: cardCount, 
            pageSize: pageSize, 
            page: page,
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys,
            collectionList: collectionResponse.data,
            content: 'collection',
            
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
        let endPoint = `http://localhost:4000/cards/${cardId}?userId=${req.userId}`;
        const config = {headers: res.customHeaders};

        const response = await axios.get(endPoint,config);

        // let collection endpooint
        let collectionEndPoint = `${constants.API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);

        const cardData = response.data;
        res.render('singleCard', {
             card: cardData,
             filterKeys: filterDefinitions.filterKeys,
             collectionList: collectionResponse.data
        });
    } catch (error) {
        next(error.response.statuscode);
    }    
};


const getCardsBySetId = async (req, res) => {
    try {
        // setup parameters and endpoint
        let setId = req.params.id;
        let endPoint = `http://localhost:4000/cards/sets/${setId}`+`?&userId=${req.userId}`  + req.paramString ;
        let setEndPoint = `http://localhost:4000/sets/${setId}`+`?&userId=${req.userId}`;

        console.log(endPoint);
        const config = {headers: res.customHeaders};

        // get card data from the API
        const response = await axios.get(endPoint, config);
        const cardData = response.data.cardData;

        // get set data from the API
        const setResponse = await axios.get(setEndPoint, config);
        const setData = setResponse.data[0];

        // let collection endpooint
        let collectionEndPoint = `${constants.API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);

        // get the target collection from the request
        let collectionId = res.req.query.collection || undefined;

        // add targetCollection property to each card object
        cardData.forEach(card => {
            if (card.collections && collectionId) {
                const defaultCollection = card.collections.defaultCollection.find(collection => collection.collection_id === collectionId);
                const customCollection = card.collections.customCollections.find(collection => collection.collection_id === collectionId);
                card.targetCollection = defaultCollection || customCollection || null;
            } else {
                card.targetCollection = card.collections.defaultCollection[0];
            }
        });

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // render the card grid view with the appropriate content
        res.render('cardGrid', { 
            cards: cardData, 
            content: 'set',
            filters : filterData,
            filterKeys: filterDefinitions.filterKeys,
            totalCards: cardData.length,
            collectionList: collectionResponse.data,
            set: setData});

    } catch (error) {
        console.error('Error fetching card data:', error.message);
        res.status(500).render('error');
    }
};

module.exports ={
    getAllCards,
    getAllCardsByCollectionId,
    getCardById,
    getCardsBySetId
}