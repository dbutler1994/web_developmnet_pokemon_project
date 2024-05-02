const axios = require('axios');
const dateFunctions = require('../functions/dateFunctions');
const constructUrlWithUserId = require('../functions/constructURLWithUserId');
const { API_ROOT_URL } = require('../config/config');

// get all expansions from the API
const getExpansions = async (req, res, next) =>{
    try{
        // setup endpoint for the expansion data, including the userId and any query parameters
        let endPoint = `${API_ROOT_URL}/expansions${req.paramString}`;  // middleware creates paramString property for query parameters
        endPoint = constructUrlWithUserId.constructUrlWithUserId(endPoint, req.userId);

        const config = {headers: res.customHeaders};

        // get expansion data from the API and extract the data
        let response = await axios.get(endPoint, config); 
        let expansionData = response.data;

        // render the setGrid view with the expansion data
        res.render("setGrid", {
            expansions: expansionData, 
            dateFunctions: dateFunctions
        });

    } catch (error) {
        next(error);
    }
};

module.exports ={
    getExpansions
}