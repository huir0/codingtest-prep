function solution(s){
    var answer = true;
    var stack = [];
    for (let i = 0; i < s.length+1; i++) {
        while (stack.length > 0) {
            if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
                stack.pop();
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(s[i]);
    }
    if (stack.length !== 1 && stack[0] !== undefined) {
        answer = false;
    }
    return answer;
}