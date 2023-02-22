const fs = require("fs");
const input = fs.readFileSync("input").toString();
// const input = fs.readFileSync("/dev/stdin").toString();

const lines = input.split("\n");

const x = lines[0]
const y = lines[1]

if (x > 0) {
    if (y > 0) {
        console.log(1);
    } else { console.log(4) }
} else {
    if (y < 0) {
        console.log(3)
    } else { console.log(2) }
}