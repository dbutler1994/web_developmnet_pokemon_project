
const axios = require('axios');
const { API_ROOT_URL } = require('../config/config');

// endpoint to get the wishlist for a user
const getUserWishlist = ( async (req, res, next) =>{ 
    try {
        const userId = req.session.user.account.id;
        let endPoint = `${API_ROOT_URL}/wishlist?userId=${userId}`;

        const response = await axios.get(url);

        // return the data from the response
        return response.data;

    } catch (error) { 
        next(error);    
    }
});

// endpoint to add a card to the wishlist
const addCardToWishlist = ( async (req, res, next) =>{ 
    try {
        let endPoint = 'http://localhost:4000/wishlist/add';
        const config = {headers: res.customHeaders};

        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId; 

        // ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }

        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            cardId,
            userId
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        next(error);   
    }
});

// endpoint to remove a card from the wishlist
const removeCardFromWishlist = ( async (req, res, next) =>{ 
    try {
        let endPoint = `${API_ROOT_URL}/wishlist/remove`;
        const config = {headers: res.customHeaders};

        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId; 

        // ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }
    
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            cardId,
            userId
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        next(error);
    }
});

module.exports ={
    getUserWishlist,
    addCardToWishlist,
    removeCardFromWishlist
}