// load moment library
const moment = require('moment');

// format the date
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