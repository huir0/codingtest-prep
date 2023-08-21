function solution(left, right) {
    var answer = 0;
    let n = left;
    while (n <= right) {
        let i = 1;
        let count = 0;
        while (i <= n) {
            if (n % i === 0) {
                count++;
            }
            i++;
        }
        if (count%2 ===0) {
            answer += n;
        } else {
            answer -= n;
        }
        n++;
    }
    return answer;
}