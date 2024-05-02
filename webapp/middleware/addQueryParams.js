// middleware to create a string from the query parameters in the request
const createQueryParameterString = (req, res, next) => {
    let paramString = '';
    let queryParams = req.query;

    // check if any query parameters are included
    if (Object.keys(queryParams).length > 0) {
        paramString += '?';
        // add the key value pairing for each query parameter to the paramString
        for (let key in queryParams) {
            paramString += `${key}=${queryParams[key]}&`;
        }
        // remove the trailing '&' from the paramString after the last query parameter
        paramString = paramString.slice(0, -1);
    }
    // add paramString to the request object so I can access it in the controller
    req.paramString = paramString;

    next();
};

module.exports = {
    createQueryParameterString
};
