// middleware to create a string from the query parameters in the request
const createQueryParameterString = (req, res, next) => {
    let paramString = '';
    let queryParams = req.query;
    //console.log('queryParams:', queryParams);

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

    // update endPoint in the request object to now include query parameters
    //console.log('paramstring:', paramString);
    req.paramString = paramString;

    next();
};

module.exports = {
    createQueryParameterString
};
