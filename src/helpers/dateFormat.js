// https://stackoverflow.com/questions/33299687/how-to-convert-dd-mm-yyyy-string-into-javascript-date-object
const moment = require('moment');

const dateFormat = (dateString) => {
    const dateMomentObject = moment(dateString, 'DD/MM/YYYY');
    return dateMomentObject.toDate();
};

module.exports = dateFormat;

console.log(dateFormat('23/09/2015'));