const fs = require("fs");
// const input = fs.readFileSync("input").toString(); // local 테스트용
const input = fs.readFileSync("/dev/stdin").toString(); // 백준 제출용

const lines = input.split("\n");

const line1 = lines[0].split(" ");

const A = Number(line1[0]);
const B = Number(line1[1]);

const result = A * B
console.log(result);
