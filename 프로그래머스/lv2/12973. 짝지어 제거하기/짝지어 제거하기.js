function solution(s) {
    let stack = [];
    for (let i of s) {
        stack.push(i);
        if (stack[stack.length - 2] === stack[stack.length - 1]) {
            stack.pop();
            stack.pop();
        }
    }
    if (stack.length === 0) return 1;
    else return 0;
}