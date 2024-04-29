
const axios = require('axios');

// endpoint to update an entry in the card_collection
const updateCollectionEntry = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/update';

        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId;
        const collectionId = req.body.collectionId;
        const copies = req.body.copies;
        const notes = req.body.notes; 

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
            userId,
            collectionId,
            cardId,
            copies,
            notes
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error);
        res.status(500).render('error');    
    }
});


module.exports ={
    updateCollectionEntry
}