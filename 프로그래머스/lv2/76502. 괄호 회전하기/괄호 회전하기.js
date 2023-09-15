function solution(s) {
    var answer = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(i) + s.slice(0,i);
        let stack = [];
        for (let j of arr) {
            stack.push(j);
            let par = stack[stack.length - 2] + stack[stack.length - 1];
            if (par === '{}' || par === '[]' || par ==='()') {
                stack.pop();
                stack.pop();
            }
        }
        if (stack.length === 0) answer++;
    }
    return answer;
}