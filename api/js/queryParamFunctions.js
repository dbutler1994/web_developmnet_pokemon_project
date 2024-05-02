const { FILTER_PREFIX } = require("../config/config");

// function to extract filter parameters from query parameters
const getFilterParams = (queryParams) => {
    const filterIdentifier = `${FILTER_PREFIX}`; // string to identify filter parameters
    const filterParams ={}; // initialise object to store filter parameters

    // for each object key determine if it is a filter parameter
    Object.keys(queryParams).forEach((key) => {
        
        if (key.startsWith(filterIdentifier)) { 
            const paramName = key.slice(filterIdentifier.length); // remove the filter prefix from the key
            const paramValue = queryParams[key].split(','); // split comma separated values into an array as the key
            filterParams[paramName] = paramValue;
        }
    });

    return filterParams;
};

module.exports = {
    getFilterParams
};