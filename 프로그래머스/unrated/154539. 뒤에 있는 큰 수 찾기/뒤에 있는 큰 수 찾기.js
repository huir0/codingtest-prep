function solution(numbers) {
    var answer = [];
    var stack = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
           stack.pop();
           }
    if (stack.length === 0) {
        answer.push(-1);
    } else {
        answer.push(stack[stack.length - 1]);
    }
    stack.push(numbers[i]);
    
    }
    answer.reverse();
    return answer;
}