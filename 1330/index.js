const fs = require("fs");
// const input = fs.readFileSync("input").toString();
const input = fs.readFileSync("/dev/stdin").toString();

const lines = input.split("\n");

const line1 = lines[0].split(" ");

const A = Number(line1[0]);
const B = Number(line1[1]);

if (A > B) {
    console.log('>');
}

if (A < B) {
    console.log('<');
}
if (A == B) {
    console.log('==');
}
