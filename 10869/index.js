const fs = require("fs");
// const input = fs.readFileSync("input").toString();
const input = fs.readFileSync("/dev/stdin").toString();

const line = input.split("\n");

const line1 = line[0].split(" ");

const A = Number(line1[0]);
const B = Number(line1[1]);


const num = parseInt(A / B);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(num);
console.log(A % B);

// const num = A + B;
// const num2 = A * B;

// console.log(num + '\n' + num2);



