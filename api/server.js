// Get required modules
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

// Initialise app and configure settings
const app = express();
const dbPool = require('./db/connect');
const path = require("path");
app.use(express.static(path.join(__dirname,'./public')));
const PORT = process.env.PORT || 4000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));


const cardsRoutes = require('./routes/cards');
const expansionsRoutes = require('./routes/expansions');
const setsRoutes = require('./routes/sets');
const accountRoutes = require('./routes/account');
const filtersRoutes = require('./routes/filters');
const wishlistRoutes = require('./routes/wishlist');   

app.use('/cards',cardsRoutes);
app.use('/expansions',expansionsRoutes);
app.use('/sets',setsRoutes);
app.use('/account',accountRoutes);
app.use('/filters',filtersRoutes);
app.use('/wishlist', wishlistRoutes);


// Start the server or desired port or 4000 as default
app.listen(PORT, (err) =>{
    if(err){
        console.log(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server listening on port: ${PORT}`)
    }
})
