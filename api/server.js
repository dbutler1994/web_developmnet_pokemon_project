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


const cardsRoutes = require('./routes/cards');

app.use('/cards',cardsRoutes);


// Start the server or desired port or 4000 as default
app.listen(PORT, (err) =>{
    if(err){
        console.log(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server listening on port: ${PORT}`)
    }
})
