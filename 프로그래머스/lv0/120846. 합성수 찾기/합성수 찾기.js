function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let j = 1;
        let count = 0;
        while (j <= i) {
            if (i % j === 0) {
                count += 1;
            }
            j++;
        }
        if (count >= 3) {
            answer += 1;
        }
    }
    return answer;
}