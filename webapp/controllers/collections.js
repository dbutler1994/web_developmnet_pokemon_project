
const axios = require('axios');

// get collections and render the collections page
const getAllCollections = ( async (req, res) =>{
    let endPoint = `http://localhost:4000/collections?userId=${req.userId}`;

    // ensure user is logged in and protect against users trying to view other users collections
    if(!req.userId){
        res.render('collections', {collections: []});
        return;
    }


    try {
        // get collections from the API
        const response = await axios.get(endPoint, {headers: res.customHeaders});
    
        // render the collections page
        res.render('collections', {collections: response.data});

    } catch (error) {
        console.error('Error fetching wishlist data:', error);
        res.status(500).render('error');    
    }
});

// endpoint to create a new collection
const createCollection = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/create';
        const config = {headers: res.customHeaders};

        // get data from the request body
        const collectionName = req.body.collectionName;
        const isDefault = req.body.isDefault;   
        const userId = req.userId;
        
        //ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }
        
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            collectionName,
            isDefault
        }, config);

         res.redirect('/collections');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error);
        res.status(500).render('error');    
    }
});


// endpoint to delete a collection
const deleteCollection = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/delete';
        const config = {headers: res.customHeaders};

        // get data from the request body
        const collectionId = req.body.collectionId;

        //ensure user is logged in
        if(!req.userId){
            res.status(401).send('User not authenticated');
            return;
        }
        
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            collectionId
        }, config);

         res.redirect('/collections');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error);
        res.status(500).render('error');    
    }
});


// endpoint to update an entry in the card_collection
const updateCollectionEntry = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/update';
        const config = {headers: res.customHeaders};

        // get data from the request body
        const cardId = req.body.cardId;
        const userId = req.userId;
        const collectionId = req.body.collectionId;
        const copies = req.body.copies;
        const notes = req.body.notes; 
        const action = req.body.action;

        // ensure user is logged in
        if(!userId){
            res.status(401).send('User not authenticated');
            return;
        }
        
        // send post request to the API to create a new account
        const response = await axios.post(endPoint, {
            userId,
            collectionId,
            cardId,
            copies,
            notes, 
            action
        }, config);

        res.status(201).send('success');

    } catch (error) { 
        console.error('Error fetching wishlist data:', error);
        res.status(500).render('error');    
    }
});

// endpoint to add an entry in the card_collection
const addCollectionEntry = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/update/add';
        const config = {headers: res.customHeaders};

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

// endpoint to add an entry in the card_collection
const removeCollectionEntry = ( async (req, res) =>{ 
    try {
        let endPoint = 'http://localhost:4000/collections/update/remove';
        const config = {headers: res.customHeaders};

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
    getAllCollections,
    updateCollectionEntry,
    createCollection,
    deleteCollection,
    addCollectionEntry,
    removeCollectionEntry
}