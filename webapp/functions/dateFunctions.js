// load moment library
const moment = require('moment');

// format the date in the format of 'DD MMMM YYYY'. Ensures consistency in the date format
const formatDate = (dateString) => {

    // get componets of the date
    const day = moment(dateString).format('DD');
    const month =  moment(dateString).format('MMMM');
    const year = moment(dateString).format('YYYY');

    return day + ' ' + month + ' ' + year;
  };


module.exports ={
    formatDate
}