// function to construct SQL WHERE clause for filter parameters
const constructFilterWhereClause = (filterParams) => {
    let whereClause = '';
    let values = [];


    console.log(filterParams);

    Object.keys(filterParams).forEach((key) => {
        const filterValue = filterParams[key];
        const filterValueLength = Array.isArray(filterValue) ? filterValue.length : 0;

        if (filterValueLength > 1) {
            
            // for array values, use IN
            const placeholders = filterValue.map(() => '?').join(',');
            whereClause += ` AND ${key} IN (${placeholders})`;
            
            // add individual array values
            values.push(...filterValue);

        } else if (!isNaN(filterValue)) {
            // if a number use = 
            whereClause += ` AND ${key} = ?`;
            values.push(Number(filterValue));

        } else {
            // Add the LIKE clause with % wildcard for string values
            whereClause += ` AND ${key} LIKE ?`;
            values.push(`%${filterValue}%`);
        }
    });

    return {whereClause, values};
};

module.exports = {
    constructFilterWhereClause
};