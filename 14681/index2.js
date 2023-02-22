const fs = require("fs");
const input = fs.readFileSync("input").toString();
// const input = fs.readFileSync("/dev/stdin").toString();

const lines = input.split("\n");

const x = lines[0];
const y = lines[1];

if (x > 0 && y > 0) {
    console.log(1);
}
if (x > 0 && y < 0) {
    console.log(4);
}
if (x < 0 && y < 0) {
    console.log(3);
}
if (x < 0 && y > 0) {
    console.log(2);
}
