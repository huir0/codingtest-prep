function solution(operations) {
    var answer = [];
    for (let i of operations) {
        let [x,y] = i.split(' ');
        if (x === 'I') answer.push(parseInt(y));
        else {
            if (y === '1') answer.splice(answer.indexOf(Math.max(...answer)),1);
            else answer.splice(answer.indexOf(Math.min(...answer)),1);
        }
    }
    return answer.length === 0 ? [0,0] : [Math.max(...answer), Math.min(...answer)];
}