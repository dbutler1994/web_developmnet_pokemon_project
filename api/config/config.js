const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY
const baseImgURL = process.env.BASE_IMAGE_URL || 'https://assets.tcgdex.net/en'
const filterPrefix = process.env.FILTER_PREFIX || 'filter_'

module.exports = {  
    PORT : port,
    API_KEY : apiKey,
    BASE_IMAGE_URL : baseImgURL,
    FILTER_PREFIX : filterPrefix
}