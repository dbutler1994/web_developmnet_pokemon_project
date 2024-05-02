const axios = require('axios');
const { API_ROOT_URL } = require('../config/config');

// get all filter data from the API
const getAllFilters = async (req, res, next) => {
    try {
        endPoint = `${API_ROOT_URL}/filters${req.paramString}`;

        const config = {headers: res.customHeaders}

        let response = await axios.get(endPoint, config);
        
        return response.data;

    } catch (error) {
        next(error);
    }
};

module.exports ={
    getAllFilters
}