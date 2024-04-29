

// function to construct URL with user ID
const constructUrlWithUserId = (endPoint, userId) => {
    if(!userId) {
        return endPoint;
    }
    
    if(endPoint.includes('?')) {
        return `${endPoint}&userId=${userId}`;
    } else {
        return `${endPoint}?userId=${userId}`;
    }
};

module.exports = {
    constructUrlWithUserId
};