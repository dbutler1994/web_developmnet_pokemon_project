const axios = require('axios');

// get all filters from the API
const getAllFilters = async (req, res) => {
    try {
        endPoint = 'http://localhost:4000/filters' + req.paramString;
        let response = await axios.get(endPoint);
        
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