const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = []
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    solution(input)
    process.exit();
});

// const solution = (lines) => {
function solution(lines) {
    const num = lines[0].split(' ');
    const x = Number(num[0])
    const y = Number(num[1])

    const result = x - y

    console.log(Math.abs(result));

}