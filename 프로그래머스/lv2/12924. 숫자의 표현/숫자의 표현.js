function solution(n) {
    var answer = 0;
    let start = 1;
    let end = 1;
    let sum = 0;
    while (start <=n) {
        if (sum < n) {
            sum += end;
            end++;
        } else if (sum === n) {
            answer++;
            sum -= start;
            start++;
        } else {
            sum -= start;
            start++;
        }
    }
    return answer;
}