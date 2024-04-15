// Get required modules
const express = require('express');

// Initialise app and configure settings
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", (req,res)=>{
    res.render('index');
});

// Start the server or desired port or 3000 as default
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>{
    if(err){
        console.log(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server listening on port: ${PORT}`)
    }
})