// checks if an attack with the same name already exists in an array
const getFilterParams = (queryParams) => {
    const filterIdentifier = 'filter_'; // string to identify filter parameters
    const filterParams ={}; // initialise object to store filter parameters

    // for each object key determine if it is a filter parameter
    Object.keys(queryParams).forEach((key) => {
        
        if (key.startsWith(filterIdentifier)) { 
            const paramName = key.slice(filterIdentifier.length);
            const paramValue = queryParams[key].split(','); // split comma separated values into an array as the key
            filterParams[paramName] = paramValue;
        }
    });

    return filterParams;
};



module.exports = {
    getFilterParams
};