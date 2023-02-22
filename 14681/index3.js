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
}