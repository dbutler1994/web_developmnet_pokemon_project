const axios = require('axios');

// get all expansions from the API
const getExpansions = async (req, res) =>{
    try{
        let endPoint = 'http://localhost:4000/expansions' + req.paramString;  // middleware creates paramString property for query parameters
        //console.log('endPoint:', endPoint); 
        let response = await axios.get(endPoint); 
        let expansionData = response.data;
        console.log('expansionData:', expansionData);
        res.render("setGrid", {expansions: expansionData});
    } catch (error) {
        console.error('Error fetching expansion data:', error.message);
        res.status(500).render('error');
    }
};

module.exports ={
    getExpansions
}