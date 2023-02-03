const fs = require("fs");
// const input = fs.readFileSync("input").toString();
const input = fs.readFileSync("/dev/stdin").toString();

const line = input.split("\n");

const line1 = line[0].split(" ");

const A = Number(line1[0]);
const B = Number(line1[1]);
const C = Number(line1[2]);

const result = A + B + C;

console.log(result);
