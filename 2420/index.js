// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const input = []
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     solution(input)
//     process.exit();
// });

// const solution = (input) => {



const fs = require("fs");
const input = fs.readFileSync("input").toString();

// function solution(input) {

const lines = input.split('/n');
const line1 = lines[0].split(' ');
const x = Number(line1[0])
const y = Number(line1[1])

if (x && y > 0) {
    if (x > y) {
        console.log(x - y)
    } else { console.log(y - x) }
}


// if (x || y < 0) {
//     if (x < y) {
//         const result = x * -1 + y
//         console.log(result);
//     }



// }


