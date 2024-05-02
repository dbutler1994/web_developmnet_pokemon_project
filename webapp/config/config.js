// API Configuration
const port = process.env.PORT || 3000;
const api_root_url = process.env.API_ROOT_URL || 'http://localhost:4000';
const api_key = process.env.API_KEY || 'SPECIFY_API_KEY';
const api_content_type = process.env.API_CONTENT_TYPE || 'application/x-www-form-urlencoded';
const filter_prefix = process.env.FILTER_PREFIX || 'filter_';


module.exports = {
    PORT: port,
    API_ROOT_URL: api_root_url,
    API_KEY: api_key,
    API_CONTENT_TYPE: api_content_type,
    FILTER_PREFIX: filter_prefix
};