function solution(dartResult) {
    var answer = [];
    let numbers = [];
    for (let result of dartResult) {
        if (result >= '0' && result <= '9') {
            numbers.push(parseInt(result));
            if (numbers[0] === 1 && numbers[1] === 0) {
                numbers.pop();
                numbers.pop();
                numbers.push(10);
            }
        }
        else {
            if (result === 'S') answer.push(numbers.pop());
            else if (result === 'D') answer.push(numbers.pop() ** 2);
            else if (result === 'T') answer.push(numbers.pop() ** 3);
            else if (result === '#') answer.push(answer.pop() * -1);
            else {
                if (answer.length > 1) {
                    let last = answer.pop();
                    answer[answer.length -1] *= 2;
                    answer.push(last * 2);
                } else answer.push(answer.pop() * 2);
                
            }
        }
    }
    return answer.reduce((a,b) => a+b);
}