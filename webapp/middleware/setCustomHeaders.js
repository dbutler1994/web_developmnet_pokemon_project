// load config file
const config = require('../config/config.js');

// function to set headers with API key
const setHeaders = (req, res, next) => {
  const headers = {};

  // Set content type
  headers['Content-Type'] = config.API_CONTENT_TYPE;
  
  // Set API key
  headers['x-api-key'] = config.API_KEY;

  console.log(headers);
  console.log(config.API_KEY);
  // Add headers to the response object
  res.customHeaders = headers;

  next();
};

module.exports ={
    setHeaders
};
