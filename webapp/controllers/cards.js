const axios = require('axios');
const filterController = require('./filters');
const filterDefinitions = require('../functions/filterKeys');
const constructUrlWithUserId = require('../functions/constructURLWithUserId');
const { API_ROOT_URL } = require('../config/config');


// get all cards from the API with filers and pagination. Render the card grid view
const getAllCards = async (req, res, next) => {
    try {
        // specify endpoint and add the userId to the endpoint along with the query parameters
        let endPoint = `${API_ROOT_URL}/cards${req.paramString}`;
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        const config = { headers: res.customHeaders };

        // get card data from the API
        let response = await axios.get(endPoint, config);

        // extract card data and count data from response
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // set collection endpooint and get collection data
        let collectionEndPoint = `${API_ROOT_URL}/collections?userId=${req.userId}`;
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
            filters: filterData,
            filterKeys: filterDefinitions.filterKeys,
            collectionList: collectionResponse.data,
            content: 'all',
        });


    } catch (error) {
        next(error);
    }
};


// get all cards from the API from a specific collection with filers and pagination. Render the card grid view
const getAllCardsByCollectionId = async (req, res, next) => {
    try {
        // specify endpoint and add the userId to the endpoint along with the query parameters
        let endPoint = `${API_ROOT_URL}/cards/collections/${req.params.collectionId}${req.paramString}`;
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        const config = { headers: res.customHeaders };

        // get card data from the API
        let response = await axios.get(endPoint, config);

        // get card data and count data from the response
        let cardData = response.data.cardData;
        let cardCount = response.data.summaryData.totalCards;

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // set collection endpooint and get collection data
        let collectionEndPoint = `${API_ROOT_URL}/collections?userId=${req.userId}`;
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
            filters: filterData,
            filterKeys: filterDefinitions.filterKeys,
            collectionList: collectionResponse.data,
            content: 'collection',
        });


    } catch (error) {
        next(error);
    }
};


// get card data by card id 
const getCardById = async (req, res, next) => {

    try {
        let cardId = req.params.id;
        let endPoint = `${API_ROOT_URL}/cards/${cardId}?userId=${req.userId}`;
        const config = { headers: res.customHeaders };

        const response = await axios.get(endPoint, config);

        // set collection endpooint and get collection data
        let collectionEndPoint = `${API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);


        // get card data from the response and render the single card view
        const cardData = response.data.cardData;


        // add targetCollection property to each card object
        cardData.targetCollection = cardData.collections.defaultCollection[0];


        res.render('singleCard', {
            card: cardData,
            filterKeys: filterDefinitions.filterKeys,
            collectionList: collectionResponse.data
        });

    } catch (error) {
        next(error);
    }
};

// get card data by set id
const getCardsBySetId = async (req, res, next) => {
    try {
        // setup parameters and endpoint for the card data and the set data
        let setId = req.params.id;
        let endPoint = `${API_ROOT_URL}/cards/sets/${setId}${req.paramString}`;
        let setEndPoint = `${API_ROOT_URL}/sets/${setId}?&userId=${req.userId}`;

        // add the userId to the endpoint
        if (endPoint.includes('?')) {
            endPoint += `&userId=${req.userId}`;
        } else {
            endPoint += `?userId=${req.userId}`;
        }

        const config = { headers: res.customHeaders };

        // get card data from the API
        const response = await axios.get(endPoint, config);
        const cardData = response.data.cardData;

        // get set data from the API
        const setResponse = await axios.get(setEndPoint, config);
        const setData = setResponse.data[0];

        // set collection endpooint and get collection data
        let collectionEndPoint = `${API_ROOT_URL}/collections?userId=${req.userId}`;
        let collectionResponse = await axios.get(collectionEndPoint, config);

        // get the target collection from the request
        let collectionId = res.req.query.collection || undefined;

        // add targetCollection property to each card object
        cardData.forEach(card => {

            card.targetCollection = card.collections.defaultCollection[0];

        });

        // get the filter data
        let filterData = await filterController.getAllFilters(req, res);

        // render the card grid view with the appropriate content
        res.render('cardGrid', {
            cards: cardData,
            content: 'set',
            filters: filterData,
            filterKeys: filterDefinitions.filterKeys,
            totalCards: cardData.length,
            collectionList: collectionResponse.data,
            set: setData
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCards,
    getAllCardsByCollectionId,
    getCardById,
    getCardsBySetId
}