function solution(a, b) {
    var answer = 0;
    let left = a > b ? b : a;
    let right = a > b ? a : b;
    for (let i = left; i <= right; i++) {
        answer += i;
    }
    return answer;
}