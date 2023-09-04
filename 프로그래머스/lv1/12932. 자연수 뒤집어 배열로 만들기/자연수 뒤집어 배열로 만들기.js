function solution(n) {
    var answer = [];
    n = n.toString();
    for (let i of n) {
        answer.unshift(parseInt(i));
    }
    return answer;
}