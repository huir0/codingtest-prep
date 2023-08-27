function solution(ingredient) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        while (stack.length >= 4) {
            if (stack.at(-1) === 1 && stack.at(-2) === 3 && stack.at(-3) === 2 && stack.at(-4) === 1) {
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            } else {
                break;
            }
        }
    }
    return answer;
}
