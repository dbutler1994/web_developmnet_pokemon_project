// load config file
const config = require('../config/config.js');

// function to set headers with API key and content type 
const setHeaders = (req, res, next) => {
  
  const headers = {};

  // set content type key from the config file
  headers['Content-Type'] = config.API_CONTENT_TYPE;
  
  // Set API key key from the config file
  headers['x-api-key'] = config.API_KEY;

  // Add headers to the response object
  res.customHeaders = headers;

  next();
};

module.exports ={
    setHeaders
};
