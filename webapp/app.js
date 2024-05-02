require('dotenv').config();

// Get required modules
const express = require('express');
const session = require('express-session');

// Initialise app and configure settings
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'./public')));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// session middleware
const halfDay = 1000 * 60 * 60 * 12;
app.use(session({
    secret: 'supersecretkeywithsomerandomcharacters5456sfsfc',
    saveUninitialized: false,
    cookie: { maxAge: halfDay },
    resave: false
}));


// Get custom middleware
const {error404Handler, error500Handler} = require('./middleware/errorMiddleware');
const {createQueryParameterString} = require('./middleware/addQueryParams');
const {sessionDataToLocals} = require('./middleware/sessionDataToLocals');
const {getUserIdFromSession}  = require('./middleware/getUserIdFromSession');
const {setHeaders} = require('./middleware/setCustomHeaders');

// Get routes
const indexRoutes = require('./routes/index');
const cardsRoutes = require('./routes/cards');
const expansionsRoutes = require('./routes/expansions');
const accountRoutes = require('./routes/account');
const wishlistRoutes = require('./routes/wishlist');
const collectionsRoutes = require('./routes/collections');
const aboutRoutes = require('./routes/about');
const { PORT } = require('./config/config');

// Use middleware before routes handled
app.use(createQueryParameterString);
app.use(sessionDataToLocals);
app.use(getUserIdFromSession);
app.use(setHeaders);



app.use('/',indexRoutes);
app.use('/cards',cardsRoutes);
app.use('/expansions',expansionsRoutes);
app.use('/account',accountRoutes);
app.use('/wishlist',wishlistRoutes);
app.use('/collections',collectionsRoutes);
app.use('/about',aboutRoutes);

// Use middleware after routes handled
app.use(error404Handler);
app.use(error500Handler);


// Start the server or desired port or 3000 as default

app.listen(PORT, (err) =>{
    if(err){
        console.log(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server listening on port: ${PORT}`)
    }
})