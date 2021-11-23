const moment = require('moment');

const dateString = '03/07/2016';
const dateObject = new Date('2016-07-03T10:15:00.000Z');
// const date = moment().format('DD/MM/yyyy LTS');
// console.log(date);
console.log(dateObject);

const dateMomentObject = moment(dateString, 'DD/MM/YYYY'); // 1st argument - string, 2nd argument - format
const dateObject1 = dateMomentObject.toDate(); // convert moment.js object to Date object
console.log(dateObject1);