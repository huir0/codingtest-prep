function solution(n) {
    var answer = 1;
    for (let i = 1; i < 700; i++) {
        if (i * 7 >= n) return answer;
        else answer++;
    }
    return answer;
}