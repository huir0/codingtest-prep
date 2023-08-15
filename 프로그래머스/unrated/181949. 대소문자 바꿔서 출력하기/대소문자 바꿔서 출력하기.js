const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = [];
    for (var i of str) {
        if (i.charCodeAt() < 97) {
            answer.push(i.toLowerCase());
        } else {
            answer.push(i.toUpperCase());
        }
    }
    console.log(answer.map((e,i)=>(e)).join(""));
});