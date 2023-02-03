
const dt = new Date();

const year = dt.getFullYear();
const month = dt.getMonth() + 1
const date = dt.getDate();

const format = year + '-' + ("00" + month).slice(-2) + '-' + date;
console.log(format);

// console.log(year);
// console.log(month);
// console.log(date);