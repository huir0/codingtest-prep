const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    solution(input);
    process.exit();
});


const solution = input => {
    let n = parseInt(input[0]);
    let i = 2;
    while (true) {
        if (n === 1) {
            break;
        }
        if (n % i === 0) {
            n = n / i;
            console.log(i);
        }
        else {
            i++;
        }
    }
}