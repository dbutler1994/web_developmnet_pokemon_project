
const axios = require('axios');

// endpoint to get the wishlist for a user
const getUserWishlist = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/wishlist';

        const userId = req.session.user.account.id;

        const url =`${endPoint}?userId=${userId}`
        
        //console.log(req.session);
        const response = await axios.get(endPoint);

        return response.data;

    } catch (error) { 
        console.error('Error fetching wishlist data:', error.message);
        res.status(500).render('error');    
    }
});

// endpoint to add a card to the wishlist
const addCardToWishlist = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/wishlist/add';


        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId; 

        // ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

    
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            cardId,
            userId
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error.message);
        res.status(500).render('error');    
    }
});

// endpoint to remove a card from the wishlist
const removeCardFromWishlist = ( async (req, res) =>{ 
    try {
        console.log(req.body);

        let endPoint = 'http://localhost:4000/wishlist/remove';
        //console.log(endPoint);

        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId; 

        // ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }

    
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            cardId,
            userId
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error.message);
        res.status(500).render('error');    
    }
});

module.exports ={
    getUserWishlist,
    addCardToWishlist,
    removeCardFromWishlist
}