const config = require("../config/config");

// middleware function to check API key is valid
const apiKeyMiddleware = (req, res, next) => {
    // Get the API key from the request header
    const requestKey = req.header("x-api-key");
    const storedKey = config.API_KEY;

    // Check if API key is present and valid
    if (requestKey !== storedKey) { 
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    next();
};

module.exports = apiKeyMiddleware;