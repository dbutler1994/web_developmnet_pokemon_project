const axios = require('axios');
const dateFunctions = require('../functions/dateFunctions');

// get all expansions from the API
const getExpansions = async (req, res) =>{
    try{
        let endPoint = 'http://localhost:4000/expansions' + req.paramString;  // middleware creates paramString property for query parameters

        let response = await axios.get(endPoint); 
        let expansionData = response.data;

        res.render("setGrid", {expansions: expansionData, dateFunctions: dateFunctions});

    } catch (error) {
        console.error('Error fetching expansion data:', error.message);
        res.status(500).render('error');
    }
};

module.exports ={
    getExpansions
}