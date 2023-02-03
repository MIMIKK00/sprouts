const fs = require("fs");
const input = fs.readFileSync("input").toString(); // local 테스트용
// const input = fs.readFileSync("/dev/stdin").toString(); // 백준 제출용
const lines = input.split("\n"); //1줄 2줄 갈라서 배열

console.log(lines);

const terms = lines[0].split(" ")  // 0번 요소(1쨰줄)꺼만 따로따로 담기
const A = Number(terms[0]);
const B = Number(terms[1]);
const result = A + B;
console.log(result);
