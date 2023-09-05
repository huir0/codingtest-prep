function solution(n) {
    var answer = 0;
    for (let i = 1; i < n + 1; i++) {
        answer++;
        while (answer % 3 === 0 || answer.toString().includes('3') === true) {
            answer++;
        }
    }
    return answer;
}