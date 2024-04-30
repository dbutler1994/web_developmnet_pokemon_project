const axios = require('axios');

// get all filters from the API
const getAllFilters = async (req, res) => {
    try {
        endPoint = 'http://localhost:4000/filters' + req.paramString;

        const config = {headers: res.customHeaders}

        let response = await axios.get(endPoint, config);
        
        //console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching filter data:', error.message);
        res.status(500).render('error');
    }
};

module.exports ={
    getAllFilters
}