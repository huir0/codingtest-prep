function solution(n) {
    var answer = Array(n).fill().map(a => a = Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        answer[i][i] = 1;
    }
    return answer;
}