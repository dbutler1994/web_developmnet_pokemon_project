// Get required modules
const express = require('express');

// Initialise app and configure settings
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'./public')));

// Get middleware
const {error404Handler} = require('./middleware/errorMiddleware');

// Get routes
const indexRoutes = require('./routes/index');
const cardsRoutes = require('./routes/cards');
const expansionsRoutes = require('./routes/expansions');

app.use('/',indexRoutes);
app.use('/cards',cardsRoutes);
app.use('/expansions',expansionsRoutes);

app.use(error404Handler);



//app.get("/", (req,res)=>{
//    res.render('error');
//});

// Start the server or desired port or 3000 as default
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>{
    if(err){
        console.log(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server listening on port: ${PORT}`)
    }
})